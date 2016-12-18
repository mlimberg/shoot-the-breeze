import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';

const Message = ({ content }) => {
  return (
    <div>
      {content}
    </div>
  )
}

module.exports = Message;
