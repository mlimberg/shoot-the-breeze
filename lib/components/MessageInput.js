import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class MessageInput extends Component {
  constructor(){
    super();
    this.state = {
      message: '',
    }
  }

  handleSubmit() {
    this.props.sendMessage(this.state.message)
  }

  updateMessage(e) {
    const message = e.target.value
    this.setState({ message: message })
  }

  render() {
    return (
      <div>
        <p></p>
        <div>
          <input onChange={this.updateMessage.bind(this)}>
          </input>
          <div className="charCount"></div>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          <button>Clear</button>
        </div>
      </div>
    )
  }
}
