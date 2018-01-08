import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import 'whatwg-fetch';
import { login } from './common';

const REQUEST_URL = 'http://localhost:3000/v1/auth/twitter';

class LoginForm extends React.Component {
  handleSubmit(event) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email || !password) {
      return;
    }
    login(email, password);

    // valueを空にする
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
  }

  handleSubmit2(event) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    fetch(REQUEST_URL, {
      headers: {
      },
    }).then((response) => {
      console.log(response)
    });
  }

  render() {
    return (
      <div>
        <form id="login" className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <input type="submit" value="Post" />
        </form>
        <form id="login_twitter" className="commentForm" onSubmit={this.handleSubmit2}>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export class Login extends React.Component {
  render() {
    return <LoginForm />;
  }
}
