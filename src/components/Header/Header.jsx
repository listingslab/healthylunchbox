/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import verge from 'verge';
import { Navbar, Nav, NavItem, CollapsibleNav } from 'react-bootstrap';
import './Header.scss';

function Header() {

  const navItems = cms.app.data.navigation || [];

  const itemSelected = () => {
    // alert ('close the menu');
  };

  const itemClick = () => {
    // alert ('item Click');
    // onSelect={itemClick}
  };

  const navigation = [];
  for (let i = 0; i < navItems.length; i += 1) {
    navigation.push(
        <li
          key={`navItem_${i}`}
        >
            <Link
              className="nav-link inline"
              to={navItems[i].url}
            >
            <h4>{navItems[i].title.toUpperCase()}</h4>
          </Link>
        </li>
    );
  }
  // const className = 'header container';
  return (
    <div className="container">
      <div className="row">
          <div className="col-md-8 col-sm-2 col-xs-3  col-md-push-2">
      				<nav className="navbar navbar-default navbar-whole">
      					  <div className="container-fluid" id="nav">

      						<div className="navbar-header ">
      						  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      							<span className="sr-only">Toggle navigation</span>
      							<span className="icon-bar"></span>
      							<span className="icon-bar"></span>
      							<span className="icon-bar"></span>
      							<span className="icon-text"><h4>MENU</h4></span>
      						  </button>
      						</div>

      						<div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1 visible-lg visible-md">
      						  <ul className="nav navbar-nav ">
      							{navigation}
      						  </ul>
      						</div>
      					  </div>
      				</nav>
      				</div>
          <div className="col-md-2 col-sm-4 col-xs-4  col-md-pull-8">
            <Link
              to='/'
            >
              <img src="/img/logos/HLB_logo-90.png" className="img-responsive header-logo-left " />
            </Link>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-5 ">
            <span id="center">
        			<span id="wrap">
                <a href="https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/" target="_blank"><img src="/img/logos/logo_cceitbi_200.png" className="img-responsive header-logo-right" /></a>
        		   </span>
      		     </span>
          </div>
        </div>

        <div className="row visible-sm visible-xs">
          <div className="col-xs-12">
            <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
      					  <ul className="nav navbar-nav ">
      						  {navigation}
      					  </ul>
      					</div>
             </div>
          </div>
      </div>

  );
}

Header.propTypes = {
  navItems: PropTypes.array
};

export default Header;

/*

<div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
  <ul className="nav navbar-nav ">
    {navigation}
  </ul>
</div>


<button
  type="button"
  className="navbar-toggle collapsed"
  data-toggle="collapse"
  data-target="#bs-example-navbar-collapse-1"
  aria-expanded="false"
>
  <span className="sr-only">Toggle navigation</span>
  <span className="icon-bar" />
  <span className="icon-bar" />
  <span className="icon-bar" />
</button>
*/
