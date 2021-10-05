`use strict`;
import React from 'react';
import ReactDOM from 'react';

class Login extends React.Component{
  constructor(){
    this.state = {
      authorized = false
    }
  }

  render(){
    const login = (
      <form></form>
    )
  }
}

ReactDOM.render(
  <Login />,
  document.querySelector('body')
)