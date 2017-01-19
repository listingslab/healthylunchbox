/**
 * Created by Chris Dorward on 15/01/2017
 * Header
 */

import React, { PropTypes } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

function Header() {
  const marginTop = '-7px';
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img className="cc_logo" alt="Cancer Council NSW Logo" src="/img/daffodil.png" height="45" />
          </Link>
        </Navbar.Brand>
         <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav">
            <li>
              <Link to="/builder">Builder</Link>
            </li>

            <li>
              <Link to="/recipies">Recipies &amp; Ideas</Link>
            </li>
            <li>
              <Link to="/tips">Tips</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Nav>
            <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Featured</MenuItem>
            </NavDropdown>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
};

export default Header;

/*

*/
