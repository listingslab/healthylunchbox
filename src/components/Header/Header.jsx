/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './Header.scss';

function Header() {
  const className = 'header container';
  const navigation = [];
  const navItems = cms.app.data.navigation;
  for (let i = 0; i < navItems.length; i += 1) {
    navigation.push(
      <Link
        key={`navItem_${i}`}
        className="nav-link"
        to={navItems[i].url}
        >{navItems[i].title}</Link>
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
  navItems: PropTypes.array
};

export default Header;
