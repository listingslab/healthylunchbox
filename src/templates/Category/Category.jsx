/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Category
 */

import React, { Component, PropTypes } from 'react';
import EditLink from '../../components/EditLink/EditLink';
import CardRecipeItem from '../../components/CardRecipeItem/CardRecipeItem';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

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
    console.log('Category Page');
    console.log(this.props.routeParams);
    const category = this.getItemsInCatSlug(this.props.routeParams.slug);
    let editBtn = null;
    if (editor) {
      editBtn = (<EditLink editUrl={category.editUrl} />);
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
      // console.log(categories[i].acf.cooking_time);
      categoriesArr.push(
        <div key={key} className="col-md-4">
          <CardRecipeItem
            route={`/recipe/${categories[i].post_name}`}
            title={categories[i].post_title}
            subTitle={categories[i].acf.short_description || ''}
            tabText="Easy to freeze"
            preparation_time={categories[i].preparation_time || ''}
            veg_serves={categories[i].veg_serves || ''}
            cooking_time={categories[i].acf.cooking_time || ''}
            freezable={categories[i].acf.freezable || false}
            image={image}
            acf={categories[i].acf || {}}
          />
        </div>
      );
    }
    return (
      <div className="row">
        <Breadcrumb />
        <div className="container">
            <h1>{category.title}</h1>
            <p>{category.subTitle}</p>
            {categoriesArr}
        </div>
        {editBtn}
      </div>
    );
  }
}

export default Category;
