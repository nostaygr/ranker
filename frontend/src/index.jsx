import React from "react";
import ReactDom from "react-dom";
import { ShowRankSample } from "./ShowRankSample";
import { UserRegister } from "./UserRegister";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ShowRankSample />
        </div>
        <div>
          <UserRegister />
        </div>
      </div>
    );
  }
}

ReactDom.render(<Index />, document.getElementById("root"));
