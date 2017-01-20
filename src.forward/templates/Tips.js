/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Tips
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CategoryTile from '../components/CategoryTile';

class Tips extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="template-tips">
        

            <p><strong>List of the tip categories.</strong></p>
            <p>This list will be a series of category tiles showing the tips categories.
              It should comfortably show 10-20 category tiles comfortably.</p>

            <p>Tiles should have a title,
            content, image and look good square or as a rectangle.</p>

            <p>Should have 2 break points; two columns wide on a big screen
            and 1 column wide on an iphone or tablet in portrait mode</p>

      </div>
    );
  }
}

export default connect()(Tips);
