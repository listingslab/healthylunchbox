/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import verge from 'verge';
import { Navbar } from 'react-bootstrap';
import './Header.scss';

function Header() {
  const navigation = [];
  const navItems = cms.app.data.navigation || [];
  for (let i = 0; i < navItems.length; i += 1) {
    navigation.push(
      <li key={`navItem_${i}`}><Link
        className="nav-link"
        to={navItems[i].url}
        ><h4>{navItems[i].title.toUpperCase()}</h4></Link></li>
    );
  }
  // const className = 'header container';
  return (
    <div id="hlb-header" className="header container">
      <div className="row">
        <div className="col-sm-8 col-xs-2 col-sm-push-2">
          <nav className="navbar navbar-default navbar-whole">
            <div className="container-fluid" id="nav">
              <div className="navbar-header ">

                <Navbar className="navigation-navbar hidden-menu">
                  <Navbar.Header className="navigation-bar">
                  <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    {navigation}
                  </Navbar.Collapse>
                </Navbar>

              </div>

            </div>
          </nav>
        </div>

        <div className="col-sm-2 col-xs-3 col-sm-pull-8">
          <Link
            to="/"
          >
            <img
              alt="Healhy Lunch Box"
              src="/img/logos/HLB_logo-90.png"
              className="img-responsive header-logo-left "
            />
        </Link>
        </div>

        <div className="col-sm-2 col-xs-7">
          <Link
            to="https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/"
            title="Eat it to beat it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/logos/EITBI.png"
              alt="Eat it to beat it"
              className="img-responsive header-logo-right"
            /></Link>
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
