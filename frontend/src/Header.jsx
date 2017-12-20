import React from 'react';
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

export class Header extends React.Component {
  render() {
    const linkComponent = links.map(({ path, name }, key) => (
      <li>
        <Link to={path}>{name}</Link>
      </li>
    ));

    return (
      <header>
        <nav>
          <ul>{linkComponent}</ul>
        </nav>
      </header>
    );
  }
}
