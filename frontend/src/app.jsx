import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Subject } from './Subject';
import { Subjects } from './Subjects';
import { Login } from './Login';
import { Logout } from './Logout';
import { Signup } from './Signup';
import {
  signup,
  login,
  setLogout,
  getSubjects,
  subjectsUpdated,
  getItems,
  createSubject,
} from './common';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      updateSubjectsToggle: false,
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
                subjects={this.state.subjects}
                updateSubjectsToggle={this.state.updateSubjectsToggle}
                getSubjectsCallback={user_id => getSubjects(this, user_id)}
                createSubjectCallback={(title, user_id) => {
                  createSubject(this, title, user_id);
                }}
              />
            )}
          />
          <Route path="/login" render={() => <Login onClick={login} />} />
          <Route path="/logout" render={() => <Logout setLogout={setLogout} />} />
          <Route path="/signup" render={() => <Signup onClick={signup} />} />
          <Route
            path="/subjects/:id"
            render={props => (
              <Subject
                items={this.state.items}
                subject={this.findSubjectById(parseInt(props.match.params.id))}
                getItemsCallback={subject_id => getItems(this, subject_id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
