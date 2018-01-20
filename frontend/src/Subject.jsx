import React from 'react';
import ReactDOM from 'react-dom';
import { createItem } from './common';

class ItemCreateForm extends React.Component {
  handleSubmit(event, subject_id) {
    event.preventDefault();
    const name = event.target.name.value;
    if (!name) {
      return;
    }
    console.log(subject_id)
    createItem(name, subject_id);

    ReactDOM.findDOMNode(event.target.name).value = '';
  }

  render() {
    return (
      <form id="subject" className="commentForm" onSubmit={e => this.handleSubmit(e, this.props.subject_id)}>
        <input type="text" name="name" placeholder="name" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export class Subject extends React.Component {
  render() {
    const subject = this.props.subject;
    return (
      // item を表示する
      <div>
        <div>
          {subject.id}: {subject.title}
        </div>
        <ItemCreateForm subject_id={subject.id} />
      </div>
    );
  }
}
