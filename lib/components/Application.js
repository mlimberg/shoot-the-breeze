import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import MessageInput from './MessageInput';
// import Messages from './Messages';
// import Search from './Search';
// import Users from './Users';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

  }

  addNewMessage() {

  }

  render() {

    return (
      <div className="Application">
        <header className="headerSection">
          {/* <Search /> */}
        </header>
        <div className="messageSection">
          {/* <Messages /> */}
        </div>
        <aside className="UsersSection">
          {/* <Users /> */}
        </aside>
        <div className="MessageInputSection">
          <MessageInput />
        </div>
      </div>
    )
  }
}
