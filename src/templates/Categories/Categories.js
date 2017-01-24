/**
 * Created by Chris Dorward on 23/01/2017
 * templates/Categories/Categories
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryTile from '../../components/CategoryTile';
import SingleHeader from '../../components/SingleHeader/SingleHeader';
import CategoriesData from './CategoriesData';
import './Categories.scss';

class Categories extends Component {
  static propTypes = {}

  render() {
    // http://api.healthylunchbox.com.au/wp-json/hlbapi/categories/lunchbox
    const pathName = this.props.location.pathname;
    let apiUrl = 'http://api.healthylunchbox.com.au/wp-json/hlbapi';
    let itemType = 'yellow';
    let header = 'Which taxonomy?';
    if (pathName === '/recipes'){
      header = 'Recipe categories';
      itemType = 'recipe';
      apiUrl = `${apiUrl}/categories/recipe_categories`;
    }
    if (pathName === '/tips'){
      header = 'Tip categories';
      itemType = 'tip';
      apiUrl = `${apiUrl}/categories/recipe_categories`;
    }
    // console.log(apiUrl);
    return (
      <div className="container">
        <SingleHeader
          catID="510"
          itemType={itemType}
          header={header}
          shortDescription="Category Description"
        />
        <div className="row">
        </div>
      </div>
    );
  }
}

export default connect()(Categories);
/*
switch (this.props.location.pathname) {
  case '/tips':
    return '';
  default:
    return '';
  }
*/
