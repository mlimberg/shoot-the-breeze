import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Users extends Component {

  render() {
    console.log(this.props.users)
    return (
      <div className='userSection'>
        <p>Users:</p>
        <p>{this.props.users}</p>
        {/* <p>{users}</p> */}
      </div>
    )
  }
}
