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

  // componentDidMount() {
  //   firebase.database().ref('messages').on('value', (snapshot) => {
  //   });
  // }

  storeMessage(message) {
    firebase.database().ref('messages').push(Object.assign(message, { id: Date.now() }));
    this.state.messages.push(Object.assign(message, { id: Date.now() }))
    this.setState({ messages: this.state.messages })

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
