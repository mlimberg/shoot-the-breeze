import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import MessageInput from './MessageInput';
import Messages from './Messages';
// import Search from './Search';
// import Users from './Users';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    }
  }

  // componentDidMount() {
  //
  // }
  //
  // addNewMessage() {
  //
  // }

  storeMessage(message) {
    this.setState({ message: message })
  }

  render() {

    return (
      <div className="Application">
        <header className="headerSection">
          {/* <Search /> */}
        </header>
        <div className="messageSection">
          <Messages message={this.state.message}/>
        </div>
        <aside className="UsersSection">
          {/* <Users /> */}
        </aside>
        <div className="MessageInputSection">
          <MessageInput sendMessage={this.storeMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}
