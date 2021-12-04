import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }

  sendText = _ => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(`http://192.168.29.170:3000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
      .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin: 8
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="App">
        <div className="boxaround" >
          <h2> Say Hi to you're friend!! </h2>
          <br />
          <input className="box1" placeholder="Enter the mobile number" value={text.recipient}
            onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
          <div style={spacer} />
        
          <br />
          <textarea placeholder="Type your message here..." className="box2" rows={3} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <div style={spacer} />
          <button className="box3" onClick={this.sendText}> Submit </button>
        </div>
      </div>
    );
  }
}

export default App;
  