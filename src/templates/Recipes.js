/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Recipes
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Recipes extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-recipes">
        <div className="category-list">
          <h3>Select a Recipe category</h3>
          <ul>
            <li><Link to="/recipes/baking-cakes">Baking cakes</Link></li>
            <li><Link to="/recipes/sandwich-fillings">Sandwich fillings</Link></li>
          </ul>
        </div>

        <p><strong>List of the recipe categories.</strong></p>

        <p>This list will be a series of category tiles showing the recipe categories.
          It should comfortably show 10-20 category tiles comfortably.</p>

          <p>Should have 2 break points; two columns wide on a big screen
          and 1 column wide on an iphone or tablet in portrait mode</p>


      </div>
    );
  }
}

export default connect()(Recipes);
