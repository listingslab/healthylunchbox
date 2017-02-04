/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Category
 */

import React, { Component, PropTypes } from 'react';
import EditLink from '../../components/EditLink/EditLink';
import CardRecipeItem from '../../components/CardRecipeItem/CardRecipeItem';

class Category extends Component {
  static propTypes = {
    routeParams: PropTypes.any,
    route: PropTypes.any
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
      const key = `cat_${i}`;
      // console.log(categories[i].image);
      let image = '';
      if (categories[i].acf.image !== false) {
        image = categories[i].acf.image.url;
      }
      const freezable = false;
      categoriesArr.push(
        <div key={key} className="col-md-4">
          <CardRecipeItem
            route={`/recipe/${categories[i].post_name}`}
            title={categories[i].post_title}
            subTitle={categories[i].acf.short_description || ''}
            tabText={categories[i].post_type}
            frezable={freezable}
            image={image}
            acf={categories[i].acf || {}}
          />
        </div>
      );
    }
    return (
      <div className="container">
        {editBtn}
        <div className="row" >
          <div className="" >
            <h1>{category.title}</h1>
            <p>{category.subTitle}</p>
          </div>
        </div>

        <div className="row margin-top-25">
          {categoriesArr}
        </div>
      </div>
    );
  }
}

export default Category;
