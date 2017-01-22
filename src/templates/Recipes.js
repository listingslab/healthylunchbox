/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Recipes
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CategoryTile from '../components/CategoryTile';

class Recipes extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-recipes">
        <div className="container">

          <div className="container">
            <h2>Recipe categories</h2>
          </div>


      </div>

          <div className="container">
            <div className="row">
              <CategoryTile
                categoryType="recipe"
                title="Recipe Category One"
                thumbnail="/img/daffs/yellow.png"
                shortDescription=""
                link="/"
              />
              <CategoryTile
                categoryType="recipe"
                title="Recipe Category Two"
                thumbnail="/img/daffs/green.png"
                shortDescription=""
                link="/"
              />
              <CategoryTile
                categoryType="recipe"
                title="Recipe Category Three"
                thumbnail="/img/daffs/orange.png"
                shortDescription=""
                link="/"
              />
              
            </div>

          </div>
      </div>
    );
  }
}

export default connect()(Recipes);
/*
<div className="alert alert-info" role="alert">
  <strong>Heads up!</strong> This list will be a series of category tiles
    showing the recipe categories. It should show 10-20 category tiles comfortably
</div>
*/
