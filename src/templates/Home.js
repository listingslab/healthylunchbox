/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-home">
        <Jumbotron />
        <ul>
          <li>
            <p>4 (could be more or less) surfaced featured content tiles</p>
            <p>Should have 2 break points; two columns wide on a big screen
            and 1 column wide on an iphone or tablet in portrait mode</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(Home);
