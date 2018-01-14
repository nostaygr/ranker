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

  findSubjectById(subjectId) {
    return this.state.subjects.filter(subject => subject.id === subjectId)[0];
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
            render={props => (
              <Subject
                subject={this.findSubjectById(parseInt(props.match.params.id))}
                id={props.match.params.id}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
