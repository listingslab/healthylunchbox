/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Category
 */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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

    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={category.editUrl}
        />
      );
    }
    const categoriesArr = [];
    const categories = category.items;
    for (let i = 0; i < categories.length; i += 1) {
      // console.log();
      const catKey = `cat_${i}`;
      categoriesArr.push(
        <div
          key={catKey}
          className="recipe col-sm-12 col-md-6 col-lg-4"
        >
          <Link
            to={`item/${category.items[i].post_name}`}
            className="btn btn-info recipe-btn"
          >
            <h3>{categories[i].post_title || ''}</h3>
            <p>{categories[i].acf.short_description || ''}</p>
          </Link>
        </div>
      );
    }
    return (
      <div className="container">
        {editBtn}
        <div className="row raised-page" >
          <h1>{category.title}</h1>
          <p>{category.subTitle}</p>
        </div>

        <div className="margin-top-25">
          {categoriesArr}
        </div>
      </div>
    );
  }
}

export default Category;
