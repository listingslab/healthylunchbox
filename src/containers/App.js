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

  componentDidMount() {
    this.hideMessage();
    this.fadeInMessage();
  }

  fadeInMessage() {
    $('#message').fadeIn();
  }

  hideMessage() {
    $('#message').hide();
  }

  render() {
    // console.log('APP RENDER');
    // cookies CMS postID="636"
    const { children } = this.props;
    const cookieNumber = 'HLB12345678';
    const message = `<p>Your cookie code is <strong>${cookieNumber}</strong></p>
    <p>Please quote this as a reference if you have any problems of issues with this website.</p>
    <p>To find out about cookies and what they mean for you, click the orange button.</p>
    <p>If you wish to turn off these messages click the blue button</p>`;
    const messageType = 'info';
    const showDismiss = true;
    const showCookies = true;
    const showSuppress = true;
    return (
      <div className="template-app">
        <div id="message">
          <Message
            type={messageType}
            showDismiss={showDismiss}
            showCookies={showCookies}
            showSuppress={showSuppress}
            title="Welcome"
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
