/**
 * Created by Chris Dorward on 15/01/2017
 * components/Header
 */

import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img className="cc_logo" alt="Cancer Council NSW Logo" src="/img/daffs/blue.png" height="45" />
          </Link>
        </Navbar.Brand>
         <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav">
            <li><Link to="/recipes">Recipes &amp; Ideas</Link></li>
            <li><Link to="/tips">Tips</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
};

export default Header;

/*
<li><Link to="/builder">Builder</Link></li>
<Nav>
  <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Featured</MenuItem>
  </NavDropdown>
</Nav>
*/
