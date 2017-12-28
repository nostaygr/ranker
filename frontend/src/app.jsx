import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { ShowRankSample } from './ShowRankSample';
import { Login } from './Login';
import { Signup } from './Signup';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={ShowRankSample} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}
