import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'whatwg-fetch';
import { signup } from './common';

class SignupForm extends React.Component {
  handleSubmit(event, onClick) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!name || !email || !password) {
      return;
    }
    onClick(name, email, password);

    // valueを空にする
    ReactDOM.findDOMNode(event.target.name).value = '';
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
  }

  render() {
    return (
      <form
        id="signup"
        className="commentForm"
        onSubmit={event => this.handleSubmit(event, this.props.onClick)}
      >
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export function Signup(props) {
  return <SignupForm onClick={props.onClick} />;
}
