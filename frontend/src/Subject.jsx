import React from 'react';

export class Subject extends React.Component {
  findSubjectById(id) {
    return this.props.subjects.filter(subject => subject.id === id)[0];
  }

  render() {
    const id = this.props.subjectId;
    const subject = this.findSubjectById(parseInt(id));
    return (
      <div>
        {id}, {subject.title}
      </div>
    );
  }
}
