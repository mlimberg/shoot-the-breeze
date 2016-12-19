import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Users extends Component {

  render(users) {
    return (
      <div className='userSection'>
        <p>Users:</p>
        {/* {users.map((user) => {
          console.log('works')
        })} */}
      </div>
    )
  }
}
