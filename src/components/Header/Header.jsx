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
  const navigation = [];
  const navItems = cms.app.data.navigation || [];
  for (let i = 0; i < navItems.length; i += 1) {
    navigation.push(
      <Link
        key={`navItem_${i}`}
        className="nav-link"
        to={navItems[i].url}
        >{navItems[i].title}</Link>
    );
  }
  // const className = 'header container';
  return (
    <div className="header container">
      <div className="row">
        <div className="col-sm-8 col-xs-2 col-sm-push-2">
          <nav className="navbar navbar-default navbar-whole">
            <div className="container-fluid" id="nav">
              <div className="navbar-header ">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-text">MENU</span>
                </button>
              </div>
              <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav ">
                  <li><Link to="/healthy-lunch-box"><h4>LUNCH BOX BUILDER</h4></Link></li>
                  <li><Link to="/recipes"><h4>RECIPES &amp; IDEAS</h4></Link></li>
                  <li><Link to="/tips"><h4>TIPS</h4></Link></li>
                  <li><Link to="/about"><h4>ABOUT</h4></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="col-sm-2 col-xs-3 col-sm-pull-8">
          <a
            href="https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/"
          >
            <img
              alt="Healhy Lunch Box"
              src="/img/logos/HLB_logo-90.png"
              className="img-responsive header-logo-left "
            />
          </a>
        </div>

        <div className="col-sm-2 col-xs-7">
          <a
            href="/"
            title="Eat it to beat it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/logos/EITBI.png" alt="Eat it to beat it" className="img-responsive header-logo-right" /></a>
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

<div className={className}>

  <div className="row margin-bottom-25">
    <div className="logo pull-left">
      <Link
        to="/"
      >
        <img src="/img/logos/HLB_logo-90.png" alt="Healthy Lunch Box" />
      </Link>
    </div>
    <div className="nav pull-right">
      {navigation}
    </div>
  </div>
</div>
<Link
  className="context-buttons"
  onClick={browserHistory.goBack}
><span className="glyphicon glyphicon-arrow-left" />&nbsp;Back</Link>
*/
