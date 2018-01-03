import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'whatwg-fetch';
import { signup } from './common.js';

class SignupForm extends React.Component {
  handleSubmit(event) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!name || !email || !password) {
      return;
    }
    signup(name, email, password);

    // valueを空にする
    ReactDOM.findDOMNode(event.target.name).value = '';
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
  }

  render() {
    return (
      <form id="signup" className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export class Signup extends React.Component {
  render() {
    return <SignupForm />;
  }
}
