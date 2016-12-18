import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

const Search = ({ messages }) => {
  return (
    <div className="headerSection">
      <h1 className='mainH1'>Shoot the Breeze</h1>
      <input className='searchInput' placeholder='Filter'></input>
      <button className='sortButton'
              id='sortUp'
              disabled={!messages.length}
              >Sort ⬆</button>
      <button className='sortButton'
              id='sortDown'
              disabled={!messages.length}
              >Sort ⬇</button>
    </div>
  )

}

module.exports = Search;
