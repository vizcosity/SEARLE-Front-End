/**
 * ChatBox component for SEARLE front end.
 *
 * This will be embeddable in a variety of different platforms such as
 * the desktop app, in addittion to the system tray icon and possible
 * mobile integrations.
 */

import React, { Component } from 'react';
import Input from './Input';
import Header from './Header';
import Conversation from './Conversation';
import {UserMessage, BotMessage} from './ChatMessage';
import Settings from './Settings';
import {ApiAiClient} from "api-ai-javascript/ApiAiClient";

// Create new DialogFlow Client
const client = new ApiAiClient({accessToken: 'f279f85913b3477e91ca64140191eb9b'});

const LogoPath = '../assets/SEARLE_Logo.svg';
const AccentColour = '#ffda44';
const DarkColour = '#252525';
const LightTextColour = '#7d7c7c';
const DarkTextColour = '#bdbdbc';

const Style = {
  ChatBox: {
    'backgroundColor': DarkColour,
    'height': '100%',
    'display': 'flex',
    flexDirection: 'column',
    'borderRadius': '5px 5px 0px 0px'
  },

  'MainWindow': {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflowY: 'scroll',
    padding: '20px'
  }
}


// Contains the 'tabs' such as the Conversation and Settings Tab
class MainWindow extends Component {

  render(){
    return (
      <div style={Style.MainWindow}>
        <Conversation awaitingResponse={this.props.awaitingResponse} getLatestMessageRef={this.props.getLatestMessageRef} conversation={this.props.conversation} visible={this.props.activeTab == 'Conversation'} />
        <Settings visible={this.props.activeTab == 'Settings'} />
      </div>
    );
  }

}


class ChatBox extends Component {

  constructor(props, context){
    super(props, context);

    // Set the Conversation to the default active tab.
    this.state = {
      activeTab: 'Conversation',
      conversation: []
    };

    this.sendMessageHandler = this.sendMessageHandler.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.getLatestMessageRef = this.getLatestMessageRef.bind(this);
  }

  getLatestMessageRef(latestMessage){
    this.latestMessage = latestMessage;
  }

  scrollToBottom(){
    this.latestMessage.scrollIntoView({behavior: 'smooth'});
  }

  changeTab(tabName){

    this.setState({
      activeTab: tabName
    });

  }

  // Fulfill Request handler.
  // Takes in a string request and queries dialogflow.
  // If an empty response is recieved, it retries a number of times until
  // a proper response is recieved.
  fulfillRequest(request, callback, count){

    if (!count) count = 0;

    client.textRequest(request).then(response => {

      if (count > 5) return { result: {fulfillment: {speech: "Request timed out. Try again or ask me something new."}}, ...response}

        // If the response is empty, run the fulfillRequest function again.
        if (!response.result.fulfillment.speech) {
          console.log(`No response recieved from DialogFlow. Re-trying...`);
          return this.fulfillRequest(request, callback, count++);
        }

        // Otherwise we should have a response we can return through the
        // callback.
        return callback(response);
    }).catch(err => console.log(`Error sending request to DialogFlow: ${err}`));

  }

  // Handler for when the user sends a new message to SEARLE
  sendMessageHandler(newUserMessage){

    this.setState({
      conversation: this.state.conversation.concat([new UserMessageObj(newUserMessage)]),
      suggestions: [],
      awaitingResponse: true
    }, () => {
      this.scrollToBottom();
    });

    // fulfillRequest through DialogFlow and embed result into page.
    this.fulfillRequest(newUserMessage, (response) => {

      // Log the response from DialogFlow.
      console.log("[DialogFlow] ", response);

      // Check if there are any suggestions.
      var suggestions = (response.result.fulfillment.data && response.result.fulfillment.data.suggestion ? response.result.fulfillment.data.suggestion : []);

      // Add the response message to the chatbox.
      this.setState({
        conversation: this.state.conversation.concat(new BotMessageObj(response.result.fulfillment.speech, response.result.fulfillment.data)),
        suggestions: suggestions,
        awaitingResponse: false
      }, () => {
        this.scrollToBottom();
      });

    });

  }

  render(){
    return (
      <div style={Style.ChatBox} >
        <Header />
        <MainWindow awaitingResponse={this.state.awaitingResponse} getLatestMessageRef={this.getLatestMessageRef} conversation={this.state.conversation} activeTab={this.state.activeTab}/>
        <Input suggestions={this.state.suggestions} sendMessageHandler={this.sendMessageHandler.bind(this)} activeButton={this.state.activeTab} changeTab={this.changeTab.bind(this)}/>
      </div>
    )
  }

}

function UserMessageObj(userMessageText){
  this.type = "user";
  this.content = userMessageText;
}

function BotMessageObj(botMessageText, richText){
  this.type = "bot";
  this.content = botMessageText;
  this.richText = richText;
}

export default ChatBox;
