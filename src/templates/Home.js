/**
 * Created by Chris Dorward on 16/01/2017
 * container/Home
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="home">
        <h2>Homepage contains</h2>
        <ul>
          <li>Jumbotron Hero Lunchbox Header</li>
          <li>Surfaced featured content</li>
        </ul>
      </div>
    );
  }
}

export default connect()(Home);
