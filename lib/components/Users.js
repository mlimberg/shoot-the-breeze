import React, { Component } from 'react'

export default class Users extends Component {

  render() {
    return(
      <div>
        <p className='usersText'>Users</p>
        {this.props.users.map( (user) => {
          return (
            <div key={user}>
              <p id={user}
                 className='userSelection'
                 onClick={this.props.handleClick}>
                 {user}
              </p>
            </div>
          )
        })
      }
        <p id='All'
           className='userSelection'
           onClick={this.props.handleClick}>
           All
         </p>
      </div>
    )
  }
}
