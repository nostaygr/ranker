import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Subject } from './Subject';
import { Subjects } from './Subjects';
import { Login } from './Login';
import { Logout } from './Logout';
import { Signup } from './Signup';
import { getSubject } from './common';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Subjects
                showSubjects={user_id => getSubject(this, user_id)}
                subjects={this.state.subjects}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/subjects/:id"
            render={props => <Subject subjects={this.state.subjects} subjectId={props.match.params.id} />}
          />
        </Switch>
      </div>
    );
  }
}
