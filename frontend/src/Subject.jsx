import React from 'react';

export class Subject extends React.Component {
  render() {
    const id = this.props.match.params.id;
    return <div>{id}</div>;
  }
}
