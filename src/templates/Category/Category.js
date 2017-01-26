/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Category
 */

import React, { Component } from 'react';
import Tile from '../../components/Tile/Tile';
import Header from '../../components/Header/Header';

class Category extends Component {
  static propTypes = {}

  render() {
    return (
        <div className="container">
          <Header
            header="Single Category Page"
            shortDescription="This page is a list items in a category."
            url="/recipes"
            linkType="internal"
            url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
          />

          <div className="row">
              <Tile
                categoryType="recipe"
                title="Item one"
                shortDescription="Item short description"
                url="/item"
              />
          </div>
        </div>
    );
  }
}

export default Category;
