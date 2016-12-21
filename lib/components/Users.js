import React, { Component } from 'react'
import IndividualUser from './IndividualUser';

export default class Users extends Component {

  render() {
    const users = this.props.users
    return(
      <div>
        <p className='usersText'>Users</p>
        <IndividualUser users={users} handleClick={this.props.handleClick}/>
        <p id='All'
           className='userSelection'
           onClick={this.props.handleClick}>
           All
         </p>
      </div>
    )
  }
}
