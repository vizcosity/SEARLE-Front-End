import React, {Component} from 'react';

class Settings extends Component {

  render(){
    return (
      <div style={{
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#363636',
        borderRadius: '10px',
        padding: '20px'
      }}className={!this.props.visible ? 'hidden' : ''}>
        <h1 style={{
          marginBottom: '20px'
        }}> Info </h1>

        <p> Hi there, I'm SEARLE, you're favourite Virtual Trading assisstant! </p> <br /> <br />
        <p> To get started, try asking me about a company you are interested in. Navigate to the 'chat' tab with the button below,
        and type away! </p>

        <div style={{
          marginTop: '20px'
        }}className="examples">
          <p> Here are some examples of things I can answer:</p> <br /> <br />
          <p> <strong> Get me the spot price of <italic>barclays</italic></strong> </p><br />
          <p> <strong> What's volume price of <italic>aviva</italic></strong> </p><br />
          <p> <strong> Is there news on <italic>lloyds</italic></strong> </p> <br />
          <p> <strong> What are the top <italic>3 risers</italic>? </strong></p>
    </div>
      </div>
    );
  }

}


export default Settings;
