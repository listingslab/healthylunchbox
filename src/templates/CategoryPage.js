/**
 * Created by Chris Dorward on 16/01/2017
 * templates/CategoryPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CategoryTile from '../components/CategoryTile';

class CategoryPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="template-recipes">
        <div className="container">

          <div className="container">
            <h2>Category Page</h2>
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
                title="Category two"
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

export default connect()(CategoryPage);
