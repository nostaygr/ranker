import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { deleteSubject } from './common';

class SubjectCreateForm extends React.Component {
  handleSubmit(event, onClick) {
    event.preventDefault();
    const title = event.target.title.value;
    if (!title) {
      return;
    }
    onClick(title, localStorage.getItem('userId'));

    ReactDOM.findDOMNode(event.target.title).value = '';
  }

  render() {
    return (
      <form
        id="subject"
        className="commentForm"
        onSubmit={e => this.handleSubmit(e, this.props.onClick)}
      >
        <input type="text" name="title" placeholder="title" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export class Subjects extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('login') === 'true') {
      this.props.getSubjectsCallback(localStorage.getItem('userId'));
    }
  }

  deleteSubmit(event) {
    event.preventDefault();
    const subjectId = event.target.subjectId.value;
    deleteSubject(subjectId);
  }

  render() {
    const subjects = this.props.subjects;

    if (localStorage.getItem('login') === 'true') {
      return (
        <div>
          <table>
            {subjects &&
              subjects.map(subject => (
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
          <SubjectCreateForm
            onClick={(title, userId) => {
              this.props.createSubjectCallback(title, userId);
            }}
          />
        </div>
      );
    }
    return null;
  }
}
