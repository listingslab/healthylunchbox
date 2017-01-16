/**
 * Created by Chris Dorward on 15/01/2017
 * Header
 */

import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

function Header(props) {
  console.log(props);
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Healthy Lunch Box</Link>
        </Navbar.Brand>
         <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/tips">Tips</Link>
          </li>
          <li>
            <Link to="/recipies">Recipies</Link>
          </li>
        </ul>
        <Nav>
          <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Cat 1</MenuItem>
              <MenuItem eventKey={3.2}>Another Cat</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
};

export default Header;
