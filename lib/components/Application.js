import React, { Component } from 'react'
import firebase, { provider, reference, signIn, signOut } from '../firebase';
import moment from 'moment';
import Input from './Input';
import MessageContainer from './MessageContainer';
import Search from './Search';
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
  }


  render() {
    return (
      <div className="application">

        <header>
          <Search messages={this.state.messages}/>
        </header>

        <div className="messageSection">
          <MessageContainer messages={this.state.messages}/>
        </div>

        <aside>
          {/* <Users /> */}
        </aside>

        <div> {
          this.state.user
          ?
          <div>
            <div className='currentUser'>
              <p className='log-in-message'>Logged in as {this.state.user.displayName}  ({this.state.user.email})</p>
              <Login className='signOut' text="Sign Out" authorize={signOut} setUser={() => {
                this.setState({ user: null })
              }} />
            </div>
                <Input sendMessage={this.storeMessage.bind(this)}/>
          </div>
          :
          <div>
            <Login className='signIn' text="Sign In" authorize={signIn} setUser={ (userFromFirebase) => {
              this.setState({ user: userFromFirebase.user})}}/>
          </div>
        }
        </div>
      </div>
    )
  }
}

const Login = ({ authorize, setUser, text, className }) => {
  return (
    <div className={className + 'Banner'}>
      <button
        className={className + 'Button'}
        onClick={()=> {
          authorize().then((fromFirebase) => setUser(fromFirebase));
        }}>{text}</button>
    </div>
  )
}
