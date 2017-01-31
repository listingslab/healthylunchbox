/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Recipes/Recipes
 */

import React, { Component, PropTypes } from 'react';
import Loader from '../../components/Loader/Loader';
import EditLink from '../../components/EditLink/EditLink';
import AddLink from '../../components/AddLink/AddLink';
import CardCategory from '../../components/CardCategory/CardCategory';
import API from '../../API';
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

  componentDidMount() {
    if (cms.Recipes === undefined) {
      const api = new API(this.state.taxonomy);
      api.getDataIfNeeded(`categories/${this.state.taxonomy}`, this.apiCallback.bind(this));
    } else {
      this.reRender();
    }
  }

  reRender() {
    this.setState({
      isLoaded: true
    });
  }

  apiCallback(cmsData) {
    cms.Recipes = cmsData;
    this.setState({
      isLoaded: true
    });
  }

  render() {
    // If we're loading show the loader
    if (!this.state.isLoaded) {
      const loaderText = `Loading ${this.state.taxonomy}`;
      const loader = (
        <Loader
          text={loaderText}
        />);
      return loader;
    }
    let editBtn = null;
    if (editor) {
      editBtn = (
        <div>
          <EditLink
            editUrl={cms.Recipes.data.editUrl || ''}
          />
          <AddLink
            addUrl={cms.Recipes.data.addUrl || ''}
            addTitle="New category"
          />
        </div>
      );
    }
    let featured = null;
    for (let i = 0; i < cms.Recipes.data.categories.length; i += 1) {
      if (cms.Recipes.data.categories[i].slug === 'featured-recipes') {
        featured = cms.Recipes.data.categories[i];
        break;
      }
    }
    let unfeatured = [];
    for (let i = 0; i < cms.Recipes.data.categories.length; i += 1) {
      if (cms.Recipes.data.categories[i].slug !== 'featured-recipes') {
        // unfeatured = cms.Recipes.data.categories[i];
        const key = `category_${i}`;
        unfeatured.push(
            <CardCategory
              key={key}
              className="col-md-6"
              itemType="recipeCategory"
              displayType="unfeatured"
              title={cms.Recipes.data.categories[i].title}
              subTitle={cms.Recipes.data.categories[i].subTitle}
              editUrl={cms.Recipes.data.categories[i].editUrl}
              route={cms.Recipes.data.categories[i].route}
            />
        );
      }
    }
    return (
      <div className="container row categories">
        {editBtn}
        <h1>{cms.Recipes.data.pageTitle || ''}</h1>
        <p>{cms.Recipes.data.pageSubTitle || ''}</p>
        <div className="container row featured">
          <CardCategory
            itemType="recipeCategory"
            displayType="featured"
            title={featured.title}
            subTitle={featured.subTitle}
            editUrl={featured.editUrl}
            route={featured.route}
          />
        </div>
        <div className="container row">
          {unfeatured}
        </div>
      </div>
    );
  }
}

export default Recipes;
