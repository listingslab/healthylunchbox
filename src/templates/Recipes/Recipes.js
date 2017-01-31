/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Recipes/Recipes
 */

import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Loader from '../../components/Loader/Loader';
import EditLink from '../../components/EditLink/EditLink';
import AddLink from '../../components/AddLink/AddLink';
import CardCategory from '../../components/CardCategory/CardCategory';
import API from '../../API';
import './Recipes.scss';

class Recipes extends Component {
  static propTypes = {
    location: PropTypes.any
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
    const loaderText = `Loading ${this.state.taxonomy}`;
    if (!this.state.isLoaded) {
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
    console.log(featured);
    return (
      <div className="container row categories">
        {editBtn}
        <h1>{cms.Recipes.data.pageTitle || ''}</h1>
        <p>{cms.Recipes.data.pageSubTitle || ''}</p>
        <div className="container row featured">
          <CardCategory
            itemType="recipeCategory"
            catType="featured"
            title={featured.title}
            subTitle={featured.subTitle}
            editUrl={featured.editUrl}
            route={featured.route}
          />
        </div>
      </div>
    );
  }
}

export default Recipes;
