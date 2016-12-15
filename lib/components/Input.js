import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Input extends Component {
  constructor(){
    super();
    this.state = {
      message: '',
    }
  }

  handleSubmit() {
    this.props.sendMessage(this.state)
    this.clearInput();
  }

  updateMessage(e) {
    const message = e.target.value
    this.setState({ message: message })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  clearInput() {
    this.setState({ message: '' })
  }

  render() {
    return (
      <div>
        <p></p>
        <div>
          <input
            onChange={this.updateMessage.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            value={this.state.message}>
          </input>
          <div className="charCount"></div>
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          <button onClick={this.clearInput.bind(this)}>Clear</button>
        </div>
      </div>
    )
  }
}
