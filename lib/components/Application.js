import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Input from './Input';
import MessageContainer from './MessageContainer';
// import Search from './Search';
// import Users from './Users';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    const storedItems = localStorage.getItem('messages');
    this.setState({ messages: storedItems ? JSON.parse(storedItems) : [] })
  }
  //
  // addNewMessage() {
  //
  // }

  storeMessage(message) {
    this.state.messages.push(Object.assign(message, { id: Date.now() }))
    this.setState({ messages: this.state.messages }, localStorage.setItem('messages', JSON.stringify(this.state.messages)))

  }

  render() {

    return (
      <div className="application">
        <header className="headerSection">
          {/* <Search /> */}
        </header>
        <div className="messageSection">
          <MessageContainer messages={this.state.messages}/>
        </div>
        <aside className="usersSection">
          {/* <Users /> */}
        </aside>
        <div>
          <Input sendMessage={this.storeMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}
