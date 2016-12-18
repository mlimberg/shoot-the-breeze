import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Users extends Component {

  render() {
    return (
      <div className='userSection'>
        <p>Users:</p>
      </div>
    )
  }
}
