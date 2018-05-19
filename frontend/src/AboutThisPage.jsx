import React from 'react';
import { render } from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';


export class AboutThisPage extends React.Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Item One" >
            foo
          </Tab>
          <Tab label="Item Two" >
            bar
          </Tab>
        </Tabs>
      </div>
    );
  }
}
