import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import { signup } from './common';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameErrorText: '',
      emailErrorText: '',
      passwordErrorText: '',
    };
  }

  onTextFieldChange(event) {
    if (event.target.value) {
      eval("this.setState({" + event.target.name + "ErrorText: '', })");
    }
  }

  validate(name, email, password) {
    const field = ["name", "email", "password"];
    let isValid = true
    for (let f of field) {
      if (!eval(f)) {
        eval("this.setState({" + f + "ErrorText: f + ' is invalid', })");
        isValid = false;
      } else {
        eval("this.setState({" + f + "ErrorText: '', })");
      }
    }

    return isValid;
  }

  handleSubmit(event, onClick) {
    // ボタンを押すことによる遷移を抑制
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if(!this.validate(name, email, password)) {
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
        <TextField
          name="name"
          placeholder="name"
          errorText={this.state.nameErrorText}
          onChange={this.onTextFieldChange.bind(this)}
        />
        <br />
        <TextField
          name="email"
          placeholder="email"
          errorText={this.state.emailErrorText}
          onChange={this.onTextFieldChange.bind(this)}
        />
        <br />
        <TextField
          name="password"
          placeholder="password"
          errorText={this.state.passwordErrorText}
          onChange={this.onTextFieldChange.bind(this)}
        />
        <br />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export function Signup(props) {
  return <SignupForm onClick={props.onClick} />;
}
