/**
 * Created by Chris Dorward on 23/01/2017
 * templates/Categories/Categories
 */

import React, { Component } from 'react';
import Tile from '../../components/Tile/Tile';
import Header from '../../components/Header/Header';

class Categories extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="container">
        <Header
          catID={''}
          itemType={''}
          header={''}
          shortDescription={''}
        />
        <div className="row">
          <Tile />
        </div>
      </div>
    );
  }
}

export default Categories;

/*
switch (this.props.location.pathname) {
  case '/tips':
    return '';
  default:
    return '';
  }
*/
