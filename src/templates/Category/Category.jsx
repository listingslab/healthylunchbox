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
    // console.log(this.props.location.query.catID);
    return (
        <div className="container">
          category page
        </div>
    );
  }
}

export default Category;
