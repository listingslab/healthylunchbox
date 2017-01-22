/**
 * Created by Chris Dorward on 22/01/2017
 * templates/CategoriesPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryTile from '../components/CategoryTile';
import CategoriesHeader from '../components/CategoriesHeader';
import ContextualMenu from '../components/ContextualMenu';

class CategoriesPage extends Component {
  static propTypes = {}

  render() {
    const pathName = this.props.location.pathname;
    let title = `No title found for ${pathName}`;
    if (pathName === '/tips') {
      title = 'Tip categories';
    }
    if (pathName === '/recipes') {
      title = 'Recipes categories';
    }

    return (
      <div className="container">
        <ContextualMenu
          categories="c"
          back=""
        />

        <CategoriesHeader
          header={title}
          shortDescription="This page is a list of categories of the content type."
          url="/categories"
        />

      <div className="row">
        <CategoryTile
          title="First Category"
          shortDescription={`This links to the category page for '${title}'`}
          url="/category"
          />
        <CategoryTile
          title="Category two"
          shortDescription={`This links to the category page for '${title}'`}
          url="/category"
          categoryType="recipe, category"
        />
    </div>
      </div>
    );
  }
}

export default connect()(CategoriesPage);
/*
switch (this.props.location.pathname) {
  case '/tips':
    return '';
  default:
    return '';
  }
*/
