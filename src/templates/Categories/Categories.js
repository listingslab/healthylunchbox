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
    const pathName = this.props.location.pathname;
    return (
      <div className="container">
        <SingleHeader
          catID="510"
          itemType="yellow"
          header="Select a category"
          shortDescription=""
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
