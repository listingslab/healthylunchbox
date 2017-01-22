/**
 * Created by Chris Dorward on 22/01/2017
 * templates/CategoriesPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryTile from '../components/CategoryTile';

class CategoriesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="template-recipes">
        <div className="container">

          <div className="container">
            <h2>Categories Page</h2>
            <p>Categories can have their own descriptions, which would be shown
              here at the top of the categories page.</p>
          </div>


      </div>
          <div className="container">
            <div className="row">
              <CategoryTile
                categoryType="recipe"
                title="Category one"
                thumbnail="/img/daffs/green.png"
                shortDescription="Item short description"
                link="/"
              />
              <CategoryTile
                categoryType="recipe"
                title="Cat two"
                thumbnail="/img/daffs/green.png"
                shortDescription="Item short description"
                link="/"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CategoriesPage);
