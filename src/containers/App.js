/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component } from 'react';
import $ from 'jquery';
import cookie from 'react-cookie';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Message from '../components/Message/Message';

class App extends Component {
  // cookie.save('userId', userId, { path: '/' });
  // cookie.remove('userId', { path: '/' });
  // cookie.load('userId')

  componentWillMount() {
    // console.log('doCookies');
    this.returningUser = false;
    let HLBcookieCode = cookie.load('HLBcookieCode');
    if (HLBcookieCode === undefined) {
      HLBcookieCode = this.makeCookieCode();
      // console.log (HLBcookieCode);
      cookie.save('HLBcookieCode', HLBcookieCode, { path: '/' });
    }else{
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
    const cookieCode = `${this.makeRandomStr(3)}-${this.makeRandomNumber(3)}`
    console.log(cookieCode);
    return cookieCode;
  }

  hideMessage() {
    $('#message').hide();
  }

  fadeInMessage() {
    $('#message').fadeIn();
  }

  render() {
    const { children } = this.props;
    const firstMessage = `<p>Your unique cookie code is <strong>${this.HLBcookieCode}</strong></p>
    <p>Please quote this as a reference if you have any problems of issues with this website.</p>
    <p>To find out about cookies and what they mean for you, click the orange button.</p>
    <p>If you wish to turn off these messages click the blue button</p>`;
    const firstTitle = `Hello and welcome`;
    const secondMessage = '';
    const secondTitle = `Welcome back, ${this.HLBcookieCode}`;
    let title = firstTitle;
    let message = firstMessage;
    if (this.returningUser){
      title = secondTitle;
      message = secondMessage;
    }
    const messageType = 'info';
    const showDismiss = true;
    const showCookies = true;
    const showDeleteCookies = true;
    const showSuppress = false;
    return (
      <div className="template-app">
        <div id="message">
          <Message
            type={messageType}
            showDismiss={showDismiss}
            showCookies={showCookies}
            showDeleteCookies={showDeleteCookies}
            showSuppress={showSuppress}
            title={title}
            message={message}
             />
        </div>
        <Navigation />
        <div className="container">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
