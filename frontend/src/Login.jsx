import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'whatwg-fetch';
import { login } from './common';

class LoginForm extends React.Component {
  handleSubmit(event, onClick) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email || !password) {
      return;
    }
    onClick(email, password);

    // valueを空にする
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
  }

  render() {
    return (
      <form
        id="login"
        className="commentForm"
        onSubmit={event => this.handleSubmit(event, this.props.onClick)}
      >
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export function Login(props) {
  return <LoginForm onClick={props.onClick} />;
}
