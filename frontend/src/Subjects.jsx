import React from 'react';
import history from './history';
import { render } from 'react-dom';

const REQUEST_URL = 'http://localhost:3000/subjects/index';

export class Subjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        client: localStorage.getItem('client'),
        uid: localStorage.getItem('uid'),
      },
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseData) => {
          this.setState({
            data: responseData,
          });
        });
      } else {
        localStorage.setItem('login', 'false');
        history.push('/login');
      }
    });
  }

  render() {
    return <ul>{this.state.data.map(subject => <li key={subject.id}>{subject.title}</li>)}</ul>;
  }
}
