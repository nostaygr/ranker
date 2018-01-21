import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { createSubject, deleteSubject } from './common';

class SubjectCreateForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    if (!title) {
      return;
    }
    createSubject(title, localStorage.getItem('user_id'));

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
  componentDidMount() {
    if (localStorage.getItem('login') === 'true') {
      this.props.showSubjects(localStorage.getItem('user_id'));
    }
  }

  deleteSubmit(event) {
    event.preventDefault();
    const subject_id = event.target.subjectId.value;
    deleteSubject(subject_id);
  }

  render() {
    const subjects = this.props.subjects;

    if (localStorage.getItem('login') === 'true') {
      return (
        <div>
          <table>
            {subjects && subjects.map(subject => (
              <tbody key={subject.id}>
                <tr>
                  <td>
                    <Link to={`/subjects/${subject.id}`}>{subject.title}</Link>
                  </td>
                  <td>
                    <form id="deleteSubject" className="form" onSubmit={this.deleteSubmit}>
                      <input type="hidden" name="subjectId" value={subject.id} />
                      <input type="submit" value="Delete" />
                    </form>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <SubjectCreateForm />
        </div>
      );
    }
    return null;
  }
}
