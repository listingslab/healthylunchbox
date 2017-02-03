/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Recipes/Recipes
 */

import React, { Component } from 'react';
import EditLink from '../../components/EditLink/EditLink';
import CardCategory from '../../components/CardCategory/CardCategory';
import './Recipes.scss';

class Recipes extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      post_content: cms.app.data.recipes.post.post_content || null,
      recipes: cms.app.data.recipes || null,
      taxonomy: 'recipes'
    };
  }

  makeMarkup() {
    return { __html: this.state.post_content };
  }

  render() {
    const title = this.state.post_content || '';
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={this.state.recipes.editUrl || ''}
        />
      );
    }
    const categoriesArr = [];
    const categories = this.state.recipes.categories;
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
          <CardCategory
            route={categories[i].route}
            title={categories[i].title || ''}
            subTitle={categories[i].subTitle || ''}
            numberItems={categories[i].items.length}
            colour="blue"
            itemType="recipe"
            image={categories[i].image}
          />
        </div>
      );
    }

    return (
      <div className="container">
        {editBtn}
        <div className="row" >
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
