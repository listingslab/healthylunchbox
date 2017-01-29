/**
 * Created by Chris Dorward on 23/01/2017
 * templates/Categories/Categories
 */

import React, { Component } from 'react';
// import Tile from '../../components/Tile/Tile';
import Header from '../../components/Header/Header';

class Categories extends Component {
  static propTypes = {}

  render() {
    const showType = 'recipe';
    const catID = 123;
    let title = 'Default categories page title';
    let subTitle = 'A list of categories to choose from.';
    let itemTypes = '';
    if (showType === 'recipe') {
      itemTypes = 'recipe';
    } else {
      itemTypes = 'tip';
    }
    return (
      <div className="container">
        <Header
          catID={catID}
          title={title}
          subTitle={subTitle}
          itemTypes={itemTypes}
        />
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
