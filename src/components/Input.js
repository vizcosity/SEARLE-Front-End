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
        <InputNavButton active={this.props.activeButton === "Settings"} tabName="Settings" changeTab={this.props.changeTab}>
        {/*?xml version="1.0" ?*/}<svg id="Layer_1" style={{enableBackground: 'new 0 0 30 30'}} version="1.1" viewBox="0 0 30 30" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M27,14h-0.172c-0.478,0-0.904-0.337-0.98-0.809c-0.037-0.229-0.081-0.456-0.132-0.68c-0.106-0.464,0.158-0.933,0.597-1.115  l0.156-0.065c0.51-0.211,0.753-0.796,0.541-1.307v0c-0.211-0.51-0.796-0.753-1.307-0.541l-0.16,0.066  c-0.441,0.183-0.961,0.035-1.214-0.37c-0.122-0.196-0.25-0.388-0.384-0.576c-0.277-0.388-0.213-0.924,0.124-1.261l0.122-0.122  c0.391-0.391,0.391-1.024,0-1.414l0,0c-0.391-0.391-1.024-0.391-1.414,0L22.656,5.93c-0.337,0.337-0.873,0.401-1.261,0.124  c-0.188-0.134-0.38-0.262-0.576-0.384c-0.405-0.252-0.553-0.773-0.37-1.214l0.066-0.16c0.211-0.51-0.031-1.095-0.541-1.307  c-0.51-0.211-1.095,0.031-1.307,0.541l-0.065,0.156c-0.182,0.439-0.651,0.703-1.115,0.597c-0.224-0.051-0.451-0.095-0.68-0.132  C16.337,4.076,16,3.65,16,3.172V3c0-0.552-0.448-1-1-1s-1,0.448-1,1v0.172c0,0.478-0.337,0.904-0.809,0.98  c-0.229,0.037-0.456,0.081-0.68,0.132c-0.464,0.106-0.933-0.158-1.115-0.597l-0.065-0.156c-0.211-0.51-0.796-0.753-1.307-0.541  c-0.51,0.211-0.753,0.796-0.541,1.307l0.066,0.16C9.733,4.897,9.586,5.418,9.18,5.67C8.984,5.792,8.792,5.92,8.605,6.053  C8.217,6.33,7.681,6.267,7.344,5.93L7.222,5.808c-0.391-0.391-1.024-0.391-1.414,0l0,0c-0.39,0.391-0.39,1.024,0,1.414L5.93,7.344  C6.267,7.681,6.33,8.216,6.053,8.605C5.92,8.792,5.792,8.984,5.67,9.18C5.418,9.586,4.897,9.733,4.456,9.55l-0.16-0.066  c-0.51-0.211-1.095,0.031-1.307,0.541v0c-0.211,0.51,0.031,1.095,0.541,1.307l0.156,0.065c0.439,0.182,0.703,0.651,0.597,1.115  c-0.051,0.224-0.095,0.451-0.132,0.68C4.076,13.663,3.65,14,3.172,14H3c-0.552,0-1,0.448-1,1v0c0,0.552,0.448,1,1,1h0.172  c0.478,0,0.904,0.337,0.98,0.809c0.037,0.229,0.081,0.456,0.132,0.68c0.106,0.464-0.158,0.933-0.597,1.115l-0.156,0.065  c-0.51,0.211-0.753,0.796-0.541,1.307v0c0.211,0.51,0.796,0.753,1.307,0.541l0.16-0.066c0.441-0.183,0.961-0.035,1.214,0.37  c0.122,0.196,0.25,0.388,0.384,0.576c0.277,0.388,0.213,0.924-0.124,1.261l-0.122,0.122c-0.391,0.391-0.391,1.024,0,1.414  s1.024,0.391,1.414,0l0.122-0.122c0.337-0.337,0.873-0.401,1.261-0.124c0.188,0.134,0.38,0.262,0.576,0.384  c0.405,0.252,0.553,0.773,0.37,1.214l-0.066,0.16c-0.211,0.51,0.031,1.095,0.541,1.307c0.51,0.211,1.095-0.031,1.307-0.541  l0.065-0.156c0.182-0.439,0.651-0.703,1.115-0.597c0.224,0.051,0.451,0.095,0.68,0.132C13.663,25.924,14,26.35,14,26.828V27  c0,0.552,0.448,1,1,1s1-0.448,1-1v-0.172c0-0.478,0.337-0.904,0.809-0.98c0.229-0.037,0.456-0.081,0.68-0.132  c0.464-0.106,0.933,0.158,1.115,0.597l0.065,0.156c0.211,0.51,0.796,0.753,1.307,0.541c0.51-0.211,0.753-0.796,0.541-1.307  l-0.066-0.16c-0.183-0.441-0.035-0.961,0.37-1.214c0.196-0.122,0.388-0.25,0.576-0.384c0.388-0.277,0.924-0.213,1.261,0.124  l0.122,0.122c0.391,0.391,1.024,0.391,1.414,0s0.391-1.024,0-1.414l-0.122-0.122c-0.337-0.337-0.401-0.873-0.124-1.261  c0.134-0.188,0.262-0.38,0.384-0.576c0.252-0.405,0.773-0.553,1.214-0.37l0.16,0.066c0.51,0.211,1.095-0.031,1.307-0.541v0  c0.211-0.51-0.031-1.095-0.541-1.307l-0.156-0.065c-0.439-0.182-0.703-0.651-0.597-1.115c0.051-0.224,0.095-0.451,0.132-0.68  C25.924,16.337,26.35,16,26.828,16H27c0.552,0,1-0.448,1-1v0C28,14.448,27.552,14,27,14z M15,23c-4.418,0-8-3.582-8-8s3.582-8,8-8  s8,3.582,8,8S19.418,23,15,23z" /><rect height={2} width={9} x={15} y={14} /><rect height={2} transform="matrix(0.5 0.866 -0.866 0.5 15.9904 -5.4904)" width={9} x="8.25" y="10.103" /><rect height={2} transform="matrix(-0.5 0.866 -0.866 -0.5 35.4904 16.8708)" width="9.5" x="8.125" y="17.681" /><circle cx={15} cy={15} r={2} /></svg>
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
        <form onSubmit={(e) => {this.onSubmitHandler(e); this.props.sendMessageHandler(this.state.inputValue)}} >
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
