import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/signup',
    name: 'SignUp',
  },
];

const buttonStyle = {
  color: 'white',
  marginTop: 5
}

export class Header extends React.Component {
  render() {
    const linkComponent = links.map(({ path, name }, key) => (
      <FlatButton label={name} key={key} style={buttonStyle} containerElement={<Link to={path} />} />
    ));

    return (
      <header>
        <AppBar
          title={<span>Ranker</span>}
          iconElementLeft={
            <IconButton containerElement={<Link to="/" />}>
              <ActionHome />
            </IconButton>
          }
          iconElementRight={
            <div>
              {linkComponent}
            </div>
          }
        />
      </header>
    );
  }
}
