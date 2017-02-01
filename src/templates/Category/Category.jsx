/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Category
 */

import React, { Component, PropTypes } from 'react';
import EditLink from '../../components/EditLink/EditLink';

class Category extends Component {
  static propTypes = {
    routeParams: PropTypes.any
  }

  getItemsInCatSlug(slug) {
    const recipeCats = cms.app.data.recipes.categories;
    for (let i = 0; i < recipeCats.length; i += 1) {
      if (recipeCats[i].slug === slug) {
        return recipeCats[i];
      }
    }
    const tipCats = cms.app.data.tips.categories;
    for (let i = 0; i < tipCats.length; i += 1) {
      if (tipCats[i].slug === slug) {
        return tipCats[i];
      }
    }
    return false;
  }

  render() {
    const category = this.getItemsInCatSlug(this.props.routeParams.slug);
    console.log(category);

    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={category.editUrl}
        />
      );
    }
    return (
      <div className="container">
        {editBtn}
        <div className="raised-page" >
          <h1>{category.title}</h1>
          <p>{category.subTitle}</p>
        </div>
      </div>
    );
  }
}

export default Category;
