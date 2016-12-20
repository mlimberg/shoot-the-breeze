import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    const messages = this.props.messages
    return (
      <div className="headerSection">
        <h1 className='mainH1'>Shoot the Breeze</h1>
        <input className='searchInput'
               placeholder='Filter'
               onChange={(e) => {
                 this.props.handleChange(e.target.value)
               }}
        ></input>
        <button className='sortButton'
                id='sortUp'
                disabled={!messages.length}
                onClick={this.props.handleClick}
          >
            {this.props.text}
          </button>
        {/* <button className='sortButton'
                id='sortDown'
                disabled={!messages.length}
          >Sort ⬆⬇</button> */}
      </div>
    )
  }
}

module.exports = Search;
