import React from "react";
import { render } from "react-dom";

const REQEST_URL = "http://localhost:3000/subjects/index";

export class ShowRankSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          data: responseData
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(subject => {
          return <li key={subject.id}>{subject.title}</li>;
        })}
      </ul>
    );
  }
}
