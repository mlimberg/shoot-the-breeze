import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

const Messages = ({message}) => {
  return (
    <div>
      {message}
    </div>
  )
}


module.exports = Messages;
