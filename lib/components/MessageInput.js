import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class MessageInput extends Component {

  render() {
    return (
      <div>
        <p></p>
        <div>
          <input>
          </input>
          <div className="charCount"></div>
          <button>Submit</button>
          <button>Clear</button>
        </div>
      </div>
    )
  }
}
