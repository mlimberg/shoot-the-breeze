import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Message from './Message';

const MessageContainer = ({messages}) => {


  const newMessage = messages.map((message, i, array) => {
    const id = array[i].time
    return (
      <div>
        <p> {message.time} {message.user} </p>
        <p key={id}>{array[i].message}</p>
      </div>
    )
  })

  return (
    <div>
      {newMessage}
    </div>
  )
}

module.exports = MessageContainer;
