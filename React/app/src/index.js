import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
  render(){
    console.log(this.props.children)
    const login = (
      <form>
        <label htmlFor="username">Nome de usuario</label>
        <input type="text" placeholder="Seu nome aqui" maxLength="20" />
      </form>
    )

    return(
      <div>
        {login}
      </div>
    )
  }
}

ReactDOM.render(
  <Login><h1>ola</h1><h1>ola2</h1></Login>,
  document.querySelector('body')
  )