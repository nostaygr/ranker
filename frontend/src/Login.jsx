import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import history from './history';
import 'whatwg-fetch';

class LoginForm extends React.Component {
  handleSubmit(event) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email || !password) {
      return;
    }

    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    postForm(form);

    // valueを空にする
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
  }

  render() {
    return (
      <form id="login" className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export class Login extends React.Component {
  render() {
    return <LoginForm />;
  }
}

function postForm(form) {
  fetch('http://localhost:3000/v1/auth/sign_in', {
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('access-token', response.headers.get('access-token'));
        localStorage.setItem('client', response.headers.get('client'));
        localStorage.setItem('uid', response.headers.get('uid'));
        localStorage.setItem('login', "true");
        history.push('/');
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to signin');
    });
}
