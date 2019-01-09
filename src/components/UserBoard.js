import React, { Component } from 'react';
import User from './User';
import './UserBoard.css';

const users = ['Alice', 'Ben', 'Peter']

export default class UserBoard extends Component {
  
  render() {
    return (
      <div className="board">
        <h3>User Board</h3>
        <ul className='users-list'>
          {users.map(user => <li><User user={user} /></li>)}
        </ul>
      </div>
    )
  }
}

