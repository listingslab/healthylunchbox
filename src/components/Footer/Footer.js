/**
 * Created by Chris Dorward on 15/01/2017
 * components/Footer/Footer
 */

import React from 'react';
import $ from 'jquery';
import cookie from 'react-cookie';

import './Footer.scss';

function Footer() {
  // console.log('FOOTER RENDER');

  const deleteCookies = () => {
    cookie.remove('HLBcookieCode', { path: '/' });
    cookie.remove('HLBcookieSuppress', { path: '/' });
    $('#root').fadeOut();
  };


  return (
    <div className="template-footer">
      <div className="container">
        <small>&copy; Cancer Council NSW 2017 vs2.5</small><br />
        <button
          title="Suppress all messages"
          onClick={deleteCookies}
          className="btn btn-default footer-btn">
          <span className="glyphicon glyphicon-remove-sign" />Start over.</button>
      </div>
    </div>
  );
}

export default Footer;
