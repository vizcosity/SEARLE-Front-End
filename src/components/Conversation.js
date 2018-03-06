import React, {Component} from 'react';
import moment from 'moment';
import {Message, UserMessage, BotMessage} from './ChatMessage';
import Spinner from 'react-loading';

const AccentColour = '#ffda44';
const DarkColour = '#252525';
const LightTextColour = '#7d7c7c';
const DarkTextColour = '#bdbdbc';

class Conversation extends Component {

  render(){
    return (
      <div
        className={'conversation'+(!this.props.visible ? ' hidden' : '')}
        style={{
        }}
      >
      <p style={{
        width: '100%',
        fontSize: '12px',
        color: LightTextColour,
        textAlign: 'center'
      }}>Ask me what I can do!</p>
        {this.props.conversation.map((message, i) => {
          if (message.type === 'bot') return (
            <BotMessage
              key={i}
              getLatestMessageRef={this.props.getLatestMessageRef}
              messageContent={message.content}
              richText={message.richText}
              timeStamp={moment().format('hh:mmA')}
            />
          );
          if (message.type === 'user') return (
            <UserMessage
             key={i}
             getLatestMessageRef={this.props.getLatestMessageRef}
             messageContent={message.content}
            />
          );
        })}

        {this.props.awaitingResponse ? <Spinner height="32px" width="32px" color={AccentColour} name="three-bounce" /> : ""}

      </div>
    );
  }

}

export default Conversation;
