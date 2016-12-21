import React, { Component } from 'react'

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
    if (e.keyCode === 13 && this.state.message.length <= 140) {
      this.handleSubmit();
    }
  }

  clearInput() {
    this.setState({ message: '' })
  }

  charCount() {
    let count = 140 - this.state.message.length;
    if (count < 0) {
      return <div className='charCountRed'>{count}</div>
    } else {
      return <div className='charCount'>{count}</div>
    }
  }

  render() {
    return (
      <div className='messageInputSection'>
        <div className='input-and-charCount'>
          <input
            className='messageInput'
            placeholder='Message'
            onChange={this.updateMessage.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            value={this.state.message}>
          </input>
          {this.charCount()}
        </div>
        <div className='submit-and-clear-btn'>
          <button className='submitMsgBtn'
                  onClick={this.handleSubmit.bind(this)}
                  disabled={!this.state.message || this.state.message.length > 140}>Submit</button>
          <button className='clearMsgBtn'
                  onClick={this.clearInput.bind(this)}
                  disabled={!this.state.message}>Clear</button>
        </div>
      </div>
    )
  }
}
