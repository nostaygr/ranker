import React from 'react';
import { render } from 'react-dom';
import history from './history';
import 'whatwg-fetch';

export class Logout extends React.Component {
  componentDidMount() {
    this.logout();
  }

  logout() {
    localStorage.setItem('login', 'false');
    history.push('/');
  }

  render() {
    return null;
  }
}
