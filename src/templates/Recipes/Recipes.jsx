/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Recipes/Recipes
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import EditLink from '../../components/EditLink/EditLink';
import './Recipes.scss';

class Recipes extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      taxonomy: 'recipes'
    };
  }

  makeMarkup() {
    return { __html: cms.app.data.recipes.post.post_content };
  }

  render() {
    const title = cms.app.data.recipes.post.post_title || '';
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={cms.app.data.recipes.editUrl || ''}
        />
      );
    }
    const categoriesArr = [];
    const categories = cms.app.data.recipes.categories;
    for (let i = 0; i < categories.length; i += 1) {
      const key = `cat_${i}`;
      const image = (
        <div className="container">
            <img
              alt={categories[i].title}
              src={categories[i].image}
              className="img-responsive pull-right card-category-image"
            />
        </div>);
      categoriesArr.push(
        <div
          key={key}
          className="col-md-6"
        >
          <div className="card-category">
              {image}
              <div className="card-color-overlay" />
                <div className="card-center-overlay-text">
                <h2>{categories[i].title || ''}</h2>
                <p>{categories[i].subTitle || ''}</p>
              </div>
            <div className="recipe-center-overlay">61 RECIPES</div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        {editBtn}
        <div className="raised-page" >
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={this.makeMarkup()} />
        </div>
          <div className="margin-top-25" >
            {categoriesArr}
          </div>
      </div>
    );
  }
}

export default Recipes;

/*
  <p>{categories[i].subTitle || ''}</p>
*/
