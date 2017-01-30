/* global showEdit */
/**
 * Created by Chris Dorward on 23/01/2017
 * templates/Categories/Categories
 */

import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Loader from '../../components/Loader/Loader';
import API from '../../API';
import './Categories.scss';

class Categories extends Component {
  static propTypes = {
    location: PropTypes.any
  }

  constructor(props) {
    super(props);
    const taxonomy = this.getTaxonomy();
    const route = this.props.location.pathname;
    this.state = {
      isLoaded: false,
      route,
      taxonomy,
      cmsData: {}
    };
  }

  componentDidMount() {
    const api = new API(this.state.taxonomy);
    api.getDataIfNeeded(`categories/${this.state.taxonomy}`, this.apiCallback.bind(this));
  }

  getTaxonomy() {
    let taxonomy = '';
    if (this.props.location.pathname === '/recipes') {
      taxonomy = 'recipes';
    }
    if (this.props.location.pathname === '/tips') {
      taxonomy = 'tips';
    }
    return taxonomy;
  }

  apiCallback(cmsData) {
    this.setState({
      isLoaded: true,
      route: this.props.location.pathname,
      cmsData
    });
  }

  render() {
    // If we're loading show the loader
    const loaderText = `Loading ${this.state.taxonomy}`;
    const notFoundText = `No categories found in "${this.state.taxonomy}"`;
    if (!this.state.isLoaded) {
      const loader = (<Loader
        text={loaderText}
        />);
      return loader;
    }
    let categoryList = [];
    if (this.state.cmsData.data.categories.length === 0) {
      categoryList.push(
        <div
          key="category"
          className="text-center"
        >{notFoundText}</div>
      );
    } else {
      const categories = this.state.cmsData.data.categories;
      for (let i = 0; i < categories.length; i += 1) {
        const key = `category_${i}`;
        const route = `category?taxonomy=${this.state.cmsData.data.itemType}&term_id=${categories[i].catID}`;
        categoryList.push(
          <Tile
            key={key}
            title={categories[i].title}
            subTitle={categories[i].subTitle}
            itemType={this.state.cmsData.data.itemType}
            editUrl={categories[i].editUrl}
            route={route}
          >{notFoundText}</Tile>
        );
      }
    }
    const showAdd = true;
    return (
      <div className="container categories">
        <Header
          pageTitle={this.state.cmsData.data.pageTitle}
          pageSubTitle={this.state.cmsData.data.pageSubTitle}
          itemTypes={this.state.cmsData.data.taxonomy}
          editUrl={this.state.cmsData.data.editUrl}
          addUrl={this.state.cmsData.data.addUrl}
          showAdd={showAdd}
        />
        <div className="row">
          {categoryList}
        </div>
      </div>
    );
  }
}

export default Categories;

/*
switch (this.props.location.pathname) {
  case '/tips':
    return '';
  default:
    return '';
  }
*/
