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
        <small>vs3.0.9</small>
      </div>
    </div>
  );
}

export default Footer;

/*
<div class="txt-footer cf">
  <div class="left">
    <img src="https://www.cancercouncil.com.au/wp-content/themes/cancercouncil/images/footer_02.png" alt=" ">
  </div>
  <div class="right">
    <p>Cancer Council NSW would like to acknowledge the traditional custodians of the
    land on which we live and work.<br>We would also like to pay respect to the elders
    past and present and extend that respect to all other Aboriginal people.</p>
  </div>
  <div class="copyright cf">
    <p>&copy; Cancer Council NSW 2015 Head Office Address: 153 Dowling Street, Woolloomooloo NSW 2011.<br>Cancer Council NSW is registered with the Australian Taxation Office as an Income Tax Exempt Charity: Charitable Fundraising Authority No. 18521. <a href="https://www.cancercouncil.com.au/ways-to-donate/tax-deductible-donations/">All donations over $2 are tax deductible.</a></p>
  </div>
</div>
*/
