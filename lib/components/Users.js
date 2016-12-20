import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Users extends Component {

  render() {
    if (!this.props.users) {
      return (
        <p>nothing</p>
    )
  } else {
    return(
      <div className='userSection'>
        <p>Users:</p>
        {this.props.users.map( (user) => {
          return (
            <div key={user}>
              <p className='userSelection'
                 onClick={this.props.handleClick}>{user}</p>
            </div>
          )
        })
      }
      <p className='userSelection' onClick={this.props.resetMessages}>All</p>
    </div>
    )
  }

  }
}
