import React, { Component } from 'react'

const IndividualUser = ({ users, handleClick }) => {
  return(
    <div>
      {users.map((user) => {
        return (
          <div key={user}>
             <p id={user}
              className='userSelection'
              onClick={handleClick}>
              {user}
            </p>
          </div>
        )
      })}
    </div>
  )
}

module.exports = IndividualUser;
