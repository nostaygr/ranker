import React from 'react';

export class Subject extends React.Component {
  render() {
    const subject = this.props.subject;
    return (
      <div>
        {subject.id}: {subject.title}
      </div>
    );
  }
}
