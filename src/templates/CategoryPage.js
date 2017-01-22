/**
 * Created by Chris Dorward on 16/01/2017
 * templates/CategoryPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CategoryTile from '../components/CategoryTile';
import CategoriesHeader from '../components/CategoriesHeader';
import ContextualMenu from '../components/ContextualMenu';

class CategoryPage extends Component {
  static propTypes = {}

  render() {
    return (
        <div className="container">
          <ContextualMenu
            categories="c"
            back=""
          />
          <CategoriesHeader
            header="Single Category Page"
            shortDescription="This page is a list items in a category."
            url="/recipes"
            linkType="internal"
            url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
          />

          <div className="row">
              <CategoryTile
                categoryType="recipe"
                title="Item one"
                shortDescription="Item short description"
                url="/item"
              />

              <CategoryTile
                categoryType="recipe"
                title="Item two"
                shortDescription="Item short description"
                url="/item"
              />
          </div>
        </div>
    );
  }
}

export default connect()(CategoryPage);
