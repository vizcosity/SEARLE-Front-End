import React, {Component} from 'react';

// Styling
const Style = {
  'Input': {
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'relative'
  },
  'InputNav': {
    borderTop: '1px solid #363636',
    'width': '100%'
  },
  'SuggestionBar': {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '95%',
    position: 'absolute',
    top: '-50px'
    // overflowX: 'auto',
    // whiteSpace: 'nowrap'
  }
}

const AccentColour = '#ffda44';
const DarkColour = '#252525';
const LightTextColour = '#7d7c7c';
const DarkTextColour = '#bdbdbc';

class InputNavButton extends Component {
  render(){
    return (
      <button onClick={() => {this.props.changeTab(this.props.tabName)}} className={`${(this.props.active ? "active " : "")}inputNavButton`}>
        {this.props.children}
      </button>
  );
  }
}

class InputNav extends Component {

  render(){
    return (
      <div style={Style.InputNav}>
        <InputNavButton active={this.props.activeButton === "Info"} tabName="Info" changeTab={this.props.changeTab}>
        {/*?xml version="1.0" ?*/}<svg enableBackground="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path d="M20,25.3c-0.6,0-1-0.4-1-1v-4.4c0-0.6,0.4-1,1-1c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4c0,0.6-0.4,1-1,1s-1-0.4-1-1   c0-3.3,2.7-6,6-6s6,2.7,6,6c0,3-2.2,5.4-5,5.9v3.5C21,24.9,20.6,25.3,20,25.3z" /></g><g><path d="M20,40C9,40,0,31,0,20S9,0,20,0c4.5,0,8.7,1.5,12.3,4.2c0.4,0.3,0.5,1,0.2,1.4c-0.3,0.4-1,0.5-1.4,0.2C27.9,3.3,24,2,20,2   C10.1,2,2,10.1,2,20s8.1,18,18,18s18-8.1,18-18c0-3.2-0.9-6.4-2.5-9.2c-0.3-0.5-0.1-1.1,0.3-1.4c0.5-0.3,1.1-0.1,1.4,0.3   C39,12.9,40,16.4,40,20C40,31,31,40,20,40z" /></g><g><path d="M20,32.5c-0.6,0-1-0.4-1-1v-2.7c0-0.6,0.4-1,1-1s1,0.4,1,1v2.7C21,32.1,20.6,32.5,20,32.5z" /></g></svg>
        </InputNavButton>
        <InputNavButton active={this.props.activeButton === "Conversation"} tabName="Conversation" changeTab={this.props.changeTab} >
         {/*?xml version="1.0" ?*/}<svg style={{enableBackground: 'new 0 0 32 32'}} version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Layer_1" /><g id="chat_x5F_alt_x5F_stroke"><g><g><path d="M25.977,12.213c-0.027,1.387-0.336,2.695-0.883,3.889C27.977,16.582,28,18.93,28,20     c0,0.992,0,4-3.996,4H20c-2.605,0-4.938,1.258-6.398,3.203C12.633,26.469,12,25.305,12,24v-4c0-0.791,0.141-1.414,0.359-1.928     C12.242,18.051,12.125,18,12,18H8.203c-0.129,0.619-0.199,1.281-0.199,2v4c0,4.418,3.578,8,7.996,8c0-2.211,1.789-4,4-4h4.004     C28,28,32,25.75,32,20C32,15.107,29.219,12.84,25.977,12.213z" style={{fill: '#4E4E50'}} /></g><path d="M16,4c1.492,0,4,0.52,4,4v4c0,1.309-0.633,2.471-1.602,3.201C16.938,13.26,14.609,12,12,12H8.004    C4,12,4,8.99,4,8c0-1.195,0-4,4.004-4H16 M16,0H8.004C4,0,0,2.125,0,8c0,5.75,4,8,8.004,8H12c2.211,0,4,1.793,4,4    c4.418,0,8.004-3.582,8.004-8V8C24.004,2.479,20,0,16,0L16,0z" /></g></g></svg>
        </InputNavButton>
      </div>
    );
  }
}

// A horisontally scrollable UI component containing clickable suggestions.
class SuggestionBar extends Component {

  render(){
    return (
      <div style={Style.SuggestionBar}>
        {this.props.suggestions ? this.props.suggestions.map((suggestionText, i) => {
          return (
            <Suggestion
              key={i}
              text={suggestionText}
              sendMessageHandler={this.props.sendMessageHandler}
            />
          );
        }) : ""}
      </div>
    );
  }

}

// A single suggestion element.
class Suggestion extends Component {
  render(){
    return (
      <button
        onClick={() => {this.props.sendMessageHandler(this.props.text)}}
        className="suggestion"
      >{this.props.text}</button>
    );
  }
}

class Input extends Component {

  constructor(props, context){
    super(props, context);

    // Set initial state of input value to empty string.
    this.state = ({
      inputValue: ""
    });

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  // Update the state of the input value so that we can pass to the new user message
  // handler when required.
  updateInputValue(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  onSubmitHandler(e){
    // Prevent form submission by default; we just want to grab the text.
    e.preventDefault();
    this.setState({
      inputValue: ''
    });
  }

  render(){
    return (
      <div style={Style.Input}>
        <SuggestionBar suggestions={this.props.suggestions} sendMessageHandler={this.props.sendMessageHandler} />
        <InputNav activeButton={this.props.activeButton} changeTab={this.props.changeTab}/>
        <form
        style={{
          display: (this.props.activeButton == "Info" ? "none" : "inherit")
        }}
        onSubmit={(e) => {this.onSubmitHandler(e); this.props.sendMessageHandler(this.state.inputValue)}} >
        <input value={this.state.inputValue} onChange={this.updateInputValue} style={{
          'padding': '10px',
          'color': LightTextColour,
          paddingTop: '20px',
          paddingBottom: '25px'
        }} placeholder="Ask Something..."/>
        </form>
      </div>
    );
  }

}


export default Input;
