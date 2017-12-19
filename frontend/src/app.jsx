import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { ShowRankSample } from './ShowRankSample';
import { UserRegister } from './UserRegister';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={ShowRankSample} />
          <Route path="/signup" component={UserRegister} />
        </Switch>
      </div>
    );
  }
}
