/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Item/Item
 */

import React, { Component, PropTypes } from 'react';
import API from '../../API';
import Loader from '../../components/Loader/Loader';
import EditLink from '../../components/EditLink/EditLink';

class Item extends Component {

  static propTypes = {
    routeParams: PropTypes.any
    // ID: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      slug: this.props.routeParams.slug
    };
    this.item = {};
  }

  componentDidMount() {
    let loadData = true;
    if (cms.items === undefined) {
      cms.items = [];
      loadData = true;
    } else if (cms.items !== undefined) {
      for (let i = 0; i < cms.items.length; i += 1) {
        if (cms.items[i].slug === this.state.slug) {
          // console.log('FOUND! do not load');
          this.item = cms.items[i];
          loadData = false;
          this.reRender();
        }
      }
    }
    if (loadData) {
      this.getData();
    }
  }

  getData() {
    const api = new API(`item/${this.state.slug}`);
    api.getData(`item/${this.state.slug}`, this.apiCallback.bind(this));
  }

  reRender() {
    this.setState({
      isLoaded: true
    });
  }

  apiCallback(itemData) {
    const item = {
      ID: itemData.data.ID,
      slug: itemData.data.post_name,
      data: itemData.data
    };
    this.item = item;
    cms.items.push(item);
    this.setState({
      isLoaded: true
    });
  }

  createMarkup(htmlText) {
    return { __html: htmlText };
  }

  render() {
    if (!this.state.isLoaded) {
      const loaderText = `Loading ${this.state.slug}`;
      const showLogo = false;
      const loader = (
        <div className="container">
          <Loader
            text={loaderText}
            showLogo={showLogo}
          />
        </div>);
      return loader;
    }
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={`http://api.healthylunchbox.com.au/wp-admin/post.php?post=${this.item.ID}&action=edit`}
        />
      );
    }
    let image = (<img alt={this.item.data.title} src="/img/no-image.png" />);
    if (this.item.data.acf.image !== false) {
      image = (<img src={this.item.data.acf.image.url} alt={this.item.data.title} />);
    }
    return (
      <div className="item container">
        {editBtn}
        <h1>{this.item.data.title}</h1>
        {image}
        <h2>{this.item.data.subTitle}</h2>
        <p>This page is a <strong>{this.item.data.post_type}</strong> page</p>
        <small>WordPress ID: <strong>{this.item.ID}</strong></small>
      </div>
    );
  }
}

export default Item;
