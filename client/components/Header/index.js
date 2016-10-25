import React from 'react'
import { Link } from 'react-router'
import logo from './logo.png';

const navItems = {
  'Inspiration': 'https://marvelapp.com/14c832e/screen/16163977',
  'Tips': 'https://marvelapp.com/14c832e/screen/16163976',
  'About': 'https://marvelapp.com/14c832e/screen/16163975'
};

const nav = [];

for (var item in navItems) {
  nav.push(<a href={navItems[item]}>{item}</a>)
}

export default () => {
    return (
      <header>
        <div className="container">
          <a className="logo" href="https://marvelapp.com/14c832e/screen/16163973">
            <img src={logo} alt="Cancer Council NSW Healthy Lunch Box" />
          </a>
          <nav>
            <Link to="/create/lunchbox">Lunch Box Builder</Link>
            {nav}
          </nav>
        </div>
      </header>
    )
}
