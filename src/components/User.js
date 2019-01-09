import React, { Component } from 'react';

export default class User extends Component {

  state = {present: true}

  toggle = () => {
    this.setState({
      present: !this.state.present
    })
  }

  render() {
    return (
      <div>
        <p>User: <b>{ this.props.user }</b></p>
        <p>{ this.props.user } is <b>{this.state.present ? '' : 'not'}</b> present</p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
    
  }
}

