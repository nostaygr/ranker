import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Subjects } from './Subjects';
import { Login } from './Login';
import { Logout } from './Logout';
import { Signup } from './Signup';
import { getSubject } from './common';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/"
            render={props => <Subjects onClick={(_this, user_id) => getSubject(_this, user_id)}/>} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}
