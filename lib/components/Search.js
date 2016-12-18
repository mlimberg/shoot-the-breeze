import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Search extends Component {

  render() {
    return (
      <div className="headerSection">
        <h1 className='mainH1'>Shoot the Breeze</h1>
        <input className='searchInput' placeholder='Filter'></input>
        <button className='sortButton' id='sortUp'>Sort ⬆</button>
        <button className='sortButton' id='sortDown'>Sort ⬇</button>
      </div>
    )
  }
}
