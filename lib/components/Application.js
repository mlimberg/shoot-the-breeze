import React, { Component } from 'react'
import firebase, { provider, reference, signIn, signOut } from '../firebase';
import moment from 'moment';
import Input from './Input';
import MessageContainer from './MessageContainer';
import Search from './Search';
import Users from './Users';


export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      filteredMessages: null,
      user: null,
      email: null,
      allUsers: null,
      sortMsg: true,

    }
  }

  componentDidMount() {
    firebase.database().ref('messages').on('value', (snapshot) => {
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        messages: itemsFromFirebase ? itemsFromFirebase : []})
      this.checkUser();
    });
  }

  checkUser() {
    //loop through message array to find all names and emails
    let array = this.state.messages.map( (message) => {

      let user = [message.user, message.email].join('')

      return user
    })
    var uniqueName = array.filter((elem, index, self)=> {
    return index == self.indexOf(elem);
  })
  this.setState({allUsers: uniqueName});
  }

  createArrayFromFB(object) {
    const firebaseKeys = object ? Object.keys(object) : [];
    return firebaseKeys.map((key) => {
      const singleMessage = object[key];
      singleMessage['firebaseId'] = key;
      return singleMessage;
    });
  }

  storeMessage(message) {
    firebase.database().ref('messages').push(Object.assign(message, {
      time: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
      user: this.state.user.displayName,
      email: this.state.user.email
    }));

    this.state.messages.push(Object.assign(message, {
      time: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
      user: this.state.user.displayName, 
      email: this.state.user.email
    }))
  }

  sort() {
    this.state.filteredMessages ? this.setState({ filteredMessages: this.state.filteredMessages.reverse()}) : this.setState({ messages: this.state.messages.reverse()})
    this.setState({ sortMsg: !this.state.sortMsg })
  }

  filter(input) {
    const filterArray = this.state.messages.filter((obj) => {
      if(obj.message.includes(input)) {
        return obj
      }
    })
    this.setState({ filteredMessages: input ? filterArray : null })
  }

  render() {
    // console.log(this.state.allUsers)
    return (
      <div className="application">

        <header>
          <Search messages={this.state.messages}
                  handleChange={this.filter.bind(this)}
                  handleClickUp={this.sort.bind(this)}
                  text={this.state.sortMsg ? 'Sort ⬇' : 'Sort ⬆'} />
                />
        </header>

        <div className="messageSection">
          <MessageContainer messages = { this.state.filteredMessages ? this.state.filteredMessages : this.state.messages}/>
        </div>

        <aside>
          <Users users={this.state.allUsers}/>
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
