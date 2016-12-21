import React, { Component } from 'react'

const MessageContainer = ({messages}) => {
  const newMessage = messages.map((message, i, array) => {
    return (
      <div key={message.firebaseId}>
        <div className='time-and-user'>
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
    <div id='messageBox'>
      {newMessage}
    </div>
  )
}

module.exports = MessageContainer;
