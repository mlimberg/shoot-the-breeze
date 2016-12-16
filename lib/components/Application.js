import React, { Component } from 'react'
import firebase, { provider, reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import moment from 'moment';
import Input from './Input';
import MessageContainer from './MessageContainer';
// import Search from './Search';
// import Users from './Users';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
    }
  }

  componentDidMount() {
    firebase.database().ref('messages').on('value', (snapshot) => {
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        messages: itemsFromFirebase ? itemsFromFirebase : []})
    });
  }

  createArrayFromFB(object) {
    const firebaseKeys = object ? Object.keys(object) : [];
    const messages = [];
    firebaseKeys.map((key) => {
      let singleMessage = object[key]
      singleMessage['firebaseId'] = key
      messages.push(singleMessage);
    });
    return messages
  }

  storeMessage(message) {
    firebase.database().ref('messages').push(Object.assign(message, {
      time: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
      user: this.state.user.displayName }));
    this.state.messages.push(Object.assign(message, {
      time: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
      user: this.state.user.displayName}))
    // this.setState({ messages: this.state.messages })
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
          Please Sign-in
          <Login text="Sign In" authorize={signIn} setUser={ (userFromFirebase) => {
            this.setState({ user: userFromFirebase.user})}}/>
        </div>
      )
    }
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
        <p className='log-in-message'>Logged in as {this.state.user.displayName}  ({this.state.user.email})</p>
        <div>
          <Input sendMessage={this.storeMessage.bind(this)}/>
        </div>
        <Login text="Sign Out" authorize={signOut} setUser={() => {
          this.setState({ user: null })
        }} />
      </div>
    )
  }
}

const Login = ({ authorize, setUser, text }) => {
  return (
    <div>
      <button
        className='sign-out-button'
        onClick={()=> {
          authorize().then((fromFirebase) => setUser(fromFirebase));
        }}>{text}</button>
    </div>
  )
}
