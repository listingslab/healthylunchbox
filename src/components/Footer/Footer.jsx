/**
 * Created by Chris Dorward on 15/01/2017
 * components/Footer/Footer
 */

import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import cookie from 'react-cookie';

import './Footer.scss';

function Footer() {
  const reload = () => {
    location.reload();
  };

  const deleteCookies = () => {
    cookie.remove('HLBcookieCode', { path: '/' });
    cookie.remove('HLBcookieSuppress', { path: '/' });
    $('#root').fadeOut(500);
    setTimeout(reload, 500);
  };

  return (
    <div className="footer text-center">
      <div className="container">
        <small>&copy; Cancer Council NSW 2017 vs2.9.7</small><br />
        <Link
          onClick={deleteCookies}
          className="btn start-again">Start again.</Link>
      </div>
    </div>
  );
}

export default Footer;
