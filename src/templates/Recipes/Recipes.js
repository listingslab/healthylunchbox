/* global editor */
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
      taxonomy: 'recipes',
      cmsData: {}
    };
  }

  componentDidMount() {
    const api = new API(this.state.taxonomy);
    api.getDataIfNeeded(`categories/${this.state.taxonomy}`, this.apiCallback.bind(this));
  }

  apiCallback(cmsData) {
    this.setState({
      isLoaded: true,
      cmsData
    });
  }

  render() {
    console.log('render recipes');
    // If we're loading show the loader
    const loaderText = `Loading ${this.state.taxonomy}`;
    // const notFoundText = `No categories found in "${this.state.taxonomy}"`;
    if (!this.state.isLoaded) {
      const loader = (<Loader
        text={loaderText}
        />);
      return loader;
    }
    let editBtn = null;
    if (editor) {
      editBtn = (
        <div>
          <EditLink
            editUrl={this.state.cmsData.data.editUrl || ''}
          />
          <AddLink
            addUrl={this.state.cmsData.data.addUrl || ''}
            addTitle="New category"
          />
        </div>
      );
    }
    return (
      <div className="container row categories">
        {editBtn}
        <h1>{this.state.cmsData.data.pageTitle || ''}</h1>
        <p>{this.state.cmsData.data.pageSubTitle || ''}</p>
      </div>


    );
  }
}

export default Recipes;
