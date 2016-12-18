import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import Message from './Message';

const MessageContainer = ({messages}) => {
  const newMessage = messages.map((message, i, array) => {
    return (
      <div key={message.firebaseId}>
        <div>
          <p className='time-stamp'>{message.time}</p>
          <p className='user-stamp'>{message.user}</p>
        </div>
        <p className='message-stamp'>
          {array[i].message}
        </p>
      </div>
    )
  })

  return (
    <div >
      {newMessage}
    </div>
  )
}

module.exports = MessageContainer;
