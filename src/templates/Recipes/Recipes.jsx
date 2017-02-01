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
      const catKey = `cat_${i}`;
      categoriesArr.push(
        <div
          key={catKey}
          className="recipe col-sm-12 col-md-6 col-lg-4"
        >
          <Link
            to={categories[i].route}
            className="btn btn-success recipe-btn"
          >
            <h3>{categories[i].title || ''}</h3>
            <p>{categories[i].subTitle || ''}</p>
          </Link>
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
