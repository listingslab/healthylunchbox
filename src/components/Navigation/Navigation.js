/**
 * Created by Chris Dorward on 15/01/2017
 * components/Navigation
 */

import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import NavigationData from './NavigationData';
import './Navigation.scss';

function onNavItemClick(itemData) {
  // console.log('\n________________________\nonNavItemClick');
  if (itemData.to !== '' || itemData.route !== '') {
    // console.log(`If there is a 'route' or 'to' attribute, send user to ->\n${itemData.to}`);
    browserHistory.push(itemData.to);
  }
}

function Navigation() {
  const items = [];
  // button types: default, primary, success, info, warning, danger, link
  const navData = {
    meta: '',
    dataArr: NavigationData
  };

  for (let i = 0; i < navData.dataArr.length; i += 1) {
    const itemData = navData.dataArr[i];
    const navKey = `navitem_${i}`;
    const className = `btn btn-${itemData.btnType} navitem-btn navitem-btn-${itemData.btnType}`;
    const boundNavItemClick = onNavItemClick.bind(this, itemData);
    items.push(
      <Link
        key={navKey}
        data={itemData}
        className={className}
        onClick={boundNavItemClick}
      >
      {itemData.text}
    </Link>
    );
  }

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img className="cc_logo" alt="Cancer Council NSW Logo" src="/img/daffs/yellow.png" height="45" />
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
function onClickHandler(e) {
  console.log('navigationClickHandler\n________________________');
  browserHistory.push('/some/path');
  console.log(e);
}
*/
