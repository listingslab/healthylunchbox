/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import './Header.scss';

function Header() {

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
  const className = 'header container';
  return (
    <div className={className}>

      <div className="row margin-bottom-25">
        <div className="logo pull-left">
          <Link
            className="context-buttons"
            onClick={browserHistory.goBack}
          ><span className="glyphicon glyphicon-arrow-left" />&nbsp;Back</Link>
          <Link
            to="/"
          >
            <img src="/img/HLB_logo.png" alt="Healthy Lunch Box" />
          </Link>
        </div>
        <div className="nav pull-right">
          {navigation}
        </div>
          <div className="margin-bottom-25 pull-right">

          </div>

      </div>
    </div>
  );
}

Header.propTypes = {
  navItems: PropTypes.array
};

export default Header;
