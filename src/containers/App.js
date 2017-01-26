/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component } from 'react';
import cookie from 'react-cookie';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

class App extends Component {
  // cookie.save('userId', userId, { path: '/' });
  // cookie.remove('userId', { path: '/' });
  // cookie.load('userId')

  render() {
    // console.log('APP RENDER');
    const { children } = this.props;
    return (
      <div className="template-app">
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
