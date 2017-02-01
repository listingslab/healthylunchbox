/* global cms */
/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import cookie from 'react-cookie';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Message from '../components/Message/Message';

class App extends Component {

  static propTypes = {
    children: PropTypes.any
  }

  componentWillMount() {
    this.returningUser = false;
    let HLBcookieCode = cookie.load('HLBcookieCode');
    // console.log(`Current CookieCode... ${HLBcookieCode}`);
    if (HLBcookieCode === undefined) {
      HLBcookieCode = this.makeCookieCode();
      const maxAge = 3600 * 24 * 365; // Will expire after 1 year (value is in number of sec.)
      cookie.save('HLBcookieCode', HLBcookieCode, {
        maxAge
      });
    } else {
      this.returningUser = true;
    }
    this.HLBcookieCode = HLBcookieCode;
  }

  componentDidMount() {
    this.hideMessage();
    this.fadeInMessage();
  }

  makeRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() *
    (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
  }

  makeRandomStr(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  makeCookieCode() {
    const cookieCode = `${this.makeRandomStr(3)}-${this.makeRandomNumber(3)}`;
    return cookieCode;
  }

  hideMessage() {
    $('#message').hide();
  }

  fadeInMessage() {
    $('#message').fadeIn(1500);
  }

  render() {
    const { children } = this.props;
    const firstMessage = `<p>Your unique cookie code is <strong>${this.HLBcookieCode}</strong></p>
    <p>Please quote this as a reference if you have any problems of issues with this website.</p>`;
    const firstTitle = 'Hello and welcome';
    const secondMessage = '';
    const secondTitle = `Welcome back, ${this.HLBcookieCode}`;
    let title = firstTitle;
    let message = firstMessage;
    if (this.returningUser) {
      title = secondTitle;
      message = secondMessage;
    }
    const messageType = 'warning';
    const showDismiss = true;
    const showCookies = false;
    const showDeleteCookies = true;
    const showSuppress = true;
    this.showMessages = true;
    const HLBcookieSuppress = cookie.load('HLBcookieSuppress');
    if (HLBcookieSuppress === 'yes' || this.returningUser) {
      this.showMessages = false;
    }
  }
}

export default App;
