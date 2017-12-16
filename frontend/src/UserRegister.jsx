import React from "react"
import ReactDOM from "react-dom"
import { render } from 'react-dom'

class UserRegisterForm extends React.Component {
  handleSubmit(event) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var password = event.target.password.value;
    console.log(name, email, password);
    if (!name || !email || !password) {
      return;
    }

    postForm({name: name, email: email, password: password});
    // valueを空にする
    ReactDOM.findDOMNode(event.target.name).value = '';
    ReactDOM.findDOMNode(event.target.email).value = '';
    ReactDOM.findDOMNode(event.target.password).value = '';
    return;
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
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
    return (
      <UserRegisterForm />
    )
  }
}

function postForm(form) {
  console.log(form);
}
