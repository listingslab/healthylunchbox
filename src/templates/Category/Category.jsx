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
import './Category.scss';

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
    const catType = this.props.routeParams.slug;
    let pageHead = null;
    if (catType === 'packed-lunches') {
      pageHead = (
        <div className="packed-lunch-header margin-bottom-25">
          <div className="row">
            <div className="col-md-12" >
              <h1>{cms.app.data.special.data.packed_lunch_category_hero_text || ''}</h1>
              <div className="image-center">
                <img
                  alt="Healthy Lunch Box"
                  className="img-responsive "
                  src="/img/hero.png"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    const category = this.getItemsInCatSlug(this.props.routeParams.slug);
    // console.log (this.props.routeParams.slug);

    const categoriesArr = [];
    const categories = category.items;
    for (let i = 0; i < categories.length; i += 1) {
      const key = `cat_${i}`;
      let image = '';
      if (categories[i].acf.image !== false) {
        image = categories[i].acf.image.url;
      }
      
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
    let editBtn = null;
    if (editor) { editBtn = (<EditLink editUrl={category.editUrl} />); }
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb
            route={this.props.route}
            thisTitle={category.title}
          />
          <div className="container">
              <h1>{category.title}</h1>
              <p>{category.subTitle}</p>
              {pageHead}
              {categoriesArr}
          </div>
          {editBtn}
        </div>
      </div>
    );
  }
}

export default Category;
