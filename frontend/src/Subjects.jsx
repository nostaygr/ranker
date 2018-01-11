import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { render } from 'react-dom';
import { createSubject } from './common';
import { getSubject } from './common';

class SubjectCreateForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    if (!title) {
      return;
    }
    createSubject(title);

    ReactDOM.findDOMNode(event.target.title).value = '';
  }

  render() {
    return (
      <form id="subject" className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export class Subjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('login') === 'true') {
      this.props.onClick(this, localStorage.getItem('user_id'));
    }
  }

  render() {
    if (localStorage.getItem('login') === 'true') {
      return (
        <div>
          <ul>{this.state.data.map(subject => <li key={subject.id}>{subject.title}</li>)}</ul>
          <SubjectCreateForm />
        </div>
      );
    }
    return null;
  }
}
