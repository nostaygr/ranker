import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { createItem } from './common';

class ItemCreateForm extends React.Component {
  handleSubmit(event, subjectId, onClick) {
    event.preventDefault();
    const name = event.target.name.value;
    if (!name) {
      return;
    }
    onClick(name, subjectId);

    ReactDOM.findDOMNode(event.target.name).value = '';
  }

  render() {
    return (
      <form
        id="subject"
        className="commentForm"
        onSubmit={e => this.handleSubmit(e, this.props.subjectId, this.props.onClick)}
      >
        <input type="text" name="name" placeholder="name" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

class ItemPublishButton extends React.Component {
  handleSubmit(event, subjectId, onClick) {
    event.preventDefault();
    onClick(subjectId);
  }

  render() {
    return (
      <form
        id="itemPublishButton"
        className="commentForm"
        onSubmit={e => this.handleSubmit(e, this.props.subjectId, this.props.onClick)}
      >
        <input type="submit" value="公開する" />
      </form>
    );
  }
}

export class EditSubject extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('login') === 'true') {
      this.props.getItemsCallback(this.props.match.params.id);
      this.props.getSubjectCallback(this.props.match.params.id);
    }
  }

  render() {
    const subject = this.props.subject;
    const items = this.props.items;
    if (subject) {
      return (
        // item を表示する
        <div>
          <div>{`${subject.title} [${subject.is_public ? '公開' : '非公開'}]`}</div>
          <table>
            {items &&
              items.map(item => (
                <tbody key={item.id}>
                  <tr>
                    <td>
                      {item.rank}:{item.name}
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          <ItemCreateForm
            subjectId={subject.id}
            onClick={(name, subjectId) => {
              this.props.createItemsCallback(name, subjectId);
            }}
          />
          <Link to={`/subjects/${subject.id}`}>プレビュー</Link>
          <ItemPublishButton
            subjectId={subject.id}
            onClick={(subjectId) => {
              this.props.publishItemsCallback(subjectId);
            }}
          />
        </div>
      );
    }
    return <div>loading...</div>;
  }
}
