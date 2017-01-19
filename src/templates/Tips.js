/**
 * Created by Chris Dorward on 16/01/2017
 * container/Tips
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Tips extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="template-tips">
        <ul>
          <li>
            <p>A list of the tipcategories.</p>
            <p>This list will be a series of tiles. It should show 10-20 category tiles
            comfortably. The tiles should have a title,
            content, image and look good square or as a rectangle.</p>

            <p>Should have 2 break points; two columns wide on a big screen
            and 1 column wide on an iphone or tablet in portrait mode</p>
          </li>
        </ul>
        <div className="category-list">
          <h3>Select a Category</h3>
          <ul>
            <li><Link to="/tips/food-safety">Food safety</Link></li>
            <li><Link to="/tips/freezing-tips">Freezing tips</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect()(Tips);
