/**
 * Created by Chris Dorward on 23/01/2017
 * templates/Categories/Categories
 */

import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import Loader from '../../components/Loader/Loader';
import API from '../../API';
import './Categories.scss';

class Categories extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isFetching: false,
      cmsData: {}
    };
  }

  componentDidMount() {
    const api = new API('categories');
    api.getDataIfNeeded('categories/?taxonomy=recipes', this.apiCallback.bind(this));
  }

  apiCallback(cmsData) {
    console.log(cmsData);
    this.setState({
      isLoaded: true,
      cmsData: {}
    });
  }

  render() {
    const showType = 'tip';
    const catID = 123;
    const title = 'Default categories page title';
    let subTitle = 'A list of categories to choose from.';
    let itemTypes = '';
    if (showType === 'recipe') {
      itemTypes = 'recipe';
    } else {
      itemTypes = 'tip';
    }
    return (
      <div className="container categories">
        <Header
          catID={catID}
          title={title}
          subTitle={subTitle}
          itemTypes={itemTypes}
        />
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
