import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

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
        <header className="header">
          <Search />
        </header>
        <div className="messageSection">
          <Messages />
        </div>
        <aside className="UsersSection">
          <Users />
        </aside>
        <div className="MessageInput">
          <MessageInput />
        </div>
      </div>
    )
  }
}
