import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import history from './history';
import 'whatwg-fetch';

class UserRegisterForm extends React.Component {
  handleSubmit(event) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!name || !email || !password) {
      return;
    }

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('password', password);
    postForm(form);

    // valueを空にする
    ReactDOM.findDOMNode(event.target.name).value = '';
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
  }

  render() {
    return (
      <form id="user-register" className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export class UserRegister extends React.Component {
  render() {
    return <UserRegisterForm />;
  }
}

function postForm(form) {
  fetch('http://localhost:3000/v1/auth', {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.status == 200) {
        history.push('/');
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      alert('failed to signup');
    });
}
