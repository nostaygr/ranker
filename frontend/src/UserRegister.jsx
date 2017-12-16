import React from "react"
import { render } from 'react-dom'

class UserRegisterForm extends React.Component {
  render() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
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
