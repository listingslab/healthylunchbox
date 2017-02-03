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
  }

  componentDidMount() {
    if (cms.items[this.state.slug] === undefined) {
      const api = new API(`item/${this.state.slug}`);
      api.getData(`item/${this.state.slug}`, this.apiCallback.bind(this));
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
    // console.log(cmsData);
    cms.app = cmsData;
    // create a new items array on data
    // console.log(cmsData);
    cms.items[cmsData.data.post_name] = {
      ID: cmsData.data.ID,
      slug: cmsData.data.post_name,
      data: cmsData.data
    };

    this.setState({
      isLoaded: true
    });
  }

  createMarkup(htmlText) {
    return { __html: htmlText };
  }

  render() {
    // http://api.healthylunchbox.com.au/wp-json/hlbapi/item/the-footlong
    // console.log(cms.items);
    let itemData = null;
    let result = 'no action?';
    for (let i = 0; i < cms.items.length; i += 1) {
      if (cms.items[this.state.slug] !== undefined) {
        itemData = cms.items[i];
        itemLoaded = true;
      }
    }
    if (!this.state.isLoaded) {
      const loaderText = `Loading ${this.state.slug}`;
      const loader = (
        <div className="container">
          <Loader
            text={loaderText}
          />
        </div>);
      return loader;
    }
    const item = cms.items[this.state.slug];
    // console.log(item);
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={`http://api.healthylunchbox.com.au/wp-admin/post.php?post=${item.ID}&action=edit`}
        />
      );
    };
    let image = <img src="/img/no-image.png" alt="set image" />;
    if (item.data.acf.image !== false) {
      image = <img src={item.data.acf.image.url} alt={item.data.title} />
    }


    return (
      <div className="item container">
        {editBtn}
        <h1>{item.data.title}</h1>
        {image}
        <h2>{item.data.subTitle}</h2>
        <p>This page is a <strong>{item.data.post_type}</strong> page</p>
        <small>WordPress ID: <strong>{item.ID}</strong></small>
      </div>
    );
  }
}

export default Item;

/*
<div dangerouslySetInnerHTML={this.createMarkup('')} />
*/
