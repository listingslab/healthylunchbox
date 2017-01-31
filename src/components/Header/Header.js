/* global editor */
/**
 * Created by Chris Dorward on 18/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './Header.scss';

function Header(props) {
  const className = 'header container';
  const navigation = [];
  for (let i = 0; i < props.navItems.length; i += 1) {
    navigation.push(
      <Link
        key={`navItem_${i}`}
        className="nav-link"
        to={props.navItems[i].url}
        >{props.navItems[i].title}</Link>
    );
  }
  return (
    <div className={className}>
      <div className="logo pull-left">
        <Link
          to="/"
          ><img src="/img/HLB_logo.png" alt="Healthy Lunch Box" />
        </Link>
      </div>

      <div className="nav pull-right">
        {navigation}
      </div>
    </div>
  );
}

Header.propTypes = {
  navItems: PropTypes.array.isRequired
};

export default Header;
