/**
 * Created by Chris Dorward on 15/01/2017
 * components/Navigation
 */

import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import './Navigation.scss';

function Navigation(props) {
  const items = [];
  // button types: default, primary, success, info, warning, danger, link
  //
  const navData = {
    meta: '',
    dataArr: [
      {
        text: 'Recipes & ideas',
        accessible: 'http://api.healthylunchbox.com.au/home/recipes/',
        url: 'thisUrl coming soon',
        to: '/recipes',
        btnType: 'danger'
      },
      {
        text: 'Tips',
        accessible: 'http://api.healthylunchbox.com.au/home/tips/',
        url: '/tips',
        to: '/tips',
        btnType: 'info'
      },
      {
        text: 'About',
        accessible: 'http://api.healthylunchbox.com.au/home/about/',
        url: '/about',
        to: '/about',
        btnType: 'warning'
      }

    ]
  };
  //         onClick={navitemClickHandler}

  for (let i = 0; i < navData.dataArr.length; i += 1) {
    const itemData = navData.dataArr[i];
    const navKey = `navitem_${i}`;
    const className = `btn btn-${itemData.btnType} navitem-btn navitem-btn-${itemData.btnType}`;
    items.push(
      <NavItem
        eventKey={1}
        key={navKey}
        className={className}
        onClick={function onClickHandler(e) {
          console.log('navigationClickHandler\n________________________');
          browserHistory.push('/some/path');
          console.log(e);
        }
      }>
      {itemData.text}
      </NavItem>
    );
  }

/*
  // array of navbar items
  for (let i = 0; navData.dataArr.length; i += 1) {
    navbarItems.push({});
  }
  console.log(navbarItems);

  */

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
        {items}
      </Navbar.Collapse>
    </Navbar>
  );
}

Navigation.propTypes = {
};

export default Navigation;

/*
<li><Link to="/builder">Builder</Link></li>
<ul className="nav navbar-nav">
    <li><Link to="/recipes">Recipes &amp; Ideas</Link></li>
    <li><Link to="/tips">Tips</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
<Nav>
  <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Featured</MenuItem>
  </NavDropdown>
</Nav>

/*
,
{
  text: 'default',
  btnType: 'default'
},
{
  text: 'primary',
  btnType: 'primary'
},
{
  text: 'success',
  btnType: 'success'
},
{
  text: 'info',
  btnType: 'info'
},
{
  text: 'warning',
  btnType: 'warning'
},
{
  text: 'danger',
  btnType: 'danger'
}
*/
