import React from 'react'
import { Link } from 'react-router'
import logo from './logo.png';

export default () => {
    return (
      <header>
        <div className="container">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>
      </header>
    )
}
