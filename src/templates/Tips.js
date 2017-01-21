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
      <div className="template-recipes">
        <div className="container">

          <div className="container">
            <h2>Tip categories</h2>
          </div>


      </div>
          <div className="container">
            <div className="row">
              <CategoryTile
                categoryType="recipe"
                title="Tip Category One"
                thumbnail="/img/daffs/yellow.png"
                shortDescription="Tip category short description"
                link="/"
              />
              <CategoryTile
                categoryType="recipe"
                title="Tip Category Two"
                thumbnail="/img/daffs/green.png"
                shortDescription="Tip category short description"
                link="/"
              />
              <CategoryTile
                categoryType="recipe"
                title="Tip Category Three"
                thumbnail="/img/daffs/orange.png"
                shortDescription="Tip category short description"
                link="/"
              />
              <CategoryTile
                categoryType="recipe"
                title="Tip Category Four"
                thumbnail="/img/daffs/blue.png"
                shortDescription="Tip category short description"
                link="/"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Tips);
/*
<div className="alert alert-info" role="alert">
  <strong>Heads up!</strong> This list will be a series of category tiles
    showing the recipe categories. It should show 10-20 category tiles comfortably.
</div>
*/
