import React from 'react';

export class Subject extends React.Component {
  render() {
    const { id, subject } = this.props;
    return (
      <div>
        {id}: {subject.title}
      </div>
    );
  }
}
