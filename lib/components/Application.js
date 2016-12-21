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
      filteredUsers: null,
      filteredInput: null,
      user: null,
      allUsers: null,
      sortMsg: true,
      userSelected: null,
    }
  }

  componentDidMount() {
    firebase.database().ref('messages').on('value', (snapshot) => {
      const itemsFromFirebase = this.createArrayFromFB(snapshot.val());
      this.setState({
        messages: itemsFromFirebase ? itemsFromFirebase : []}, () => {
          this.scroll()
        })
      this.checkUser();
    });
  }

  checkUser() {
    let array = this.state.messages.map( (message) => {
      let user = [message.user].join(' ')
      return user
    })
    let uniqueName = array.filter((elem, index, self)=> {
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
      time: moment(Date.now()).format('MM/D, h:mm a'),
      user: this.state.user.displayName,
      email: this.state.user.email
    }));
    this.state.messages.push(Object.assign(message, {
      time: moment(Date.now()).format('MM/D, h:mm a'),
      user: this.state.user.displayName,
      email: this.state.user.email
    }))
    this.checkUser();
    this.showAllMessages();
    setTimeout(() => {
      this.scroll()
    }, 0)
  }


  showAllMessages() {
    this.setState({ filteredInput: null, filteredUsers: null, filteredMessages: null })
    let users = document.getElementsByClassName('userSelection')
    for(let i = 0; i< users.length; i++) {
      users[i].style.color = '#2c3e50'
    }
    document.getElementById('All').style.color = '#2ecc71';
  }

  scroll() {
    window.scrollBy(0, document.getElementById('messageBox').scrollHeight)
  }

  sort() {
    this.state.filteredMessages ? this.state.filteredMessages.reverse() : this.state.messages.reverse();
    this.setState({ sortMsg: !this.state.sortMsg })
  }

  filter(input) {
    const filterArray = this.state.messages.filter((obj) => {
      if(obj.message.toLowerCase().includes(input.toLowerCase())) {
        return obj
      }
    })
    this.setState({ filteredInput: input ? filterArray : null }, () => {
      this.setState({ filteredMessages: this.state.filteredUsers ? combineArrays(this.state.filteredInput, this.state.filteredUsers ) : this.state.filteredInput })
    })
    if (input === '' && this.state.userSelected) {
      this.setState({ filteredMessages: this.state.filteredUsers })
    } else {
      this.setState({ filteredMessages: null })
    }
  }

  filterByUser(e) {
    let userClicked = e.currentTarget.innerHTML;
    if (userClicked === 'All') {
      this.showAllMessages()
    } else {
        const filterArray = this.state.messages.filter((obj) => {
          if(obj.user === userClicked) {
            return obj
          }
        })
      this.setState({ filteredUsers: filterArray  }, () => {
      this.setState({ filteredMessages: this.state.filteredInput ? combineArrays(this.state.filteredUsers, this.state.filteredInput ) : this.state.filteredUsers })
      })
    };
    this.setState({ userSelected: userClicked })
  }

  setUserColor(e) {
    let userClicked = e.currentTarget.innerHTML;
    let users = document.getElementsByClassName('userSelection')
    for(let i = 0; i< users.length; i++) {
      users[i].style.color = '#2c3e50'
    }
    document.getElementById(userClicked).style.color = '#2ecc71'
  }

  render() {
    return (
      <div className="application">

        <header className='headerSection'>
          <Search messages={this.state.messages}
                  handleChange={this.filter.bind(this)}
                  handleClick={this.sort.bind(this)}
                  text={this.state.sortMsg ? 'Sort ⬇' : 'Sort ⬆'} />
        </header>

        <div className='messageSection'>
          <MessageContainer messages = { this.state.filteredMessages ? this.state.filteredMessages : this.state.messages} />
        </div>

        <aside className='userSection'>
          <Users users={this.state.allUsers}
                 handleClick={(e) => {
                   this.filterByUser(e)
                   this.setUserColor(e)}}
                 resetMessages={this.showAllMessages.bind(this)} />
        </aside>

        <div className='footerSection'> {
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

const combineArrays = (array1, array2) => {
    let newArray = array1.filter((val)=> {
      return array2.indexOf(val) != -1;
    })
  return newArray
}
