/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';
import Loader from '../../components/Loader/Loader';
import API from '../../API';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isFetching: false,
      cmsData: {
        heroTitle: '',
        heroSubTitle: '',
        linkText: '',
        linkUrl: '/healthy-lunch-box',
        linkType: 'to',
        featuredItems: [
          {
            ID: 0,
            title: ''
          }
        ]
      }
    };
  }

  componentDidMount() {
    const api = new API('yesPlease');
    api.getDataIfNeeded('home', this.apiCallback.bind(this));
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

  apiCallback(cmsData) {
    this.setState({
      isLoaded: true,
      cmsData: {
        heroTitle: cmsData.data.hero.heroTitle,
        heroSubTitle: cmsData.data.hero.heroSubTitle,
        linkText: cmsData.data.hero.linkText,
        linkUrl: cmsData.data.hero.linkUrl,
        linkType: cmsData.data.hero.linkType,
        featuredItems: cmsData.data.featured.items
      } });
  }

  render() {
    const showEdit = true;
    const featuredItems = [];
    for (let i = 0; i < this.state.cmsData.featuredItems.length; i += 1) {
      const item = this.state.cmsData.featuredItems[i];
      featuredItems.push(<Tile
        key={`featuredItem_${item.ID}`}
        title={item.title || ''}
        itemType={item.itemType || ''}
        subTitle={item.subTitle || ''}
        itemModified={item.itemModified || ''}
        itemSlug={item.itemSlug || ''}
        showEdit={showEdit}
        editUrl={item.editLink || ''}
      />);
    }
    // If we're loading show the loader
    if (!this.state.isLoaded) {
      const loader = (<Loader
        text="Loading Healthy Lunch Box"
        />);
      return loader;
    }
    // else show the data-driven home page
    const ID = 508;
    const editUrl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${ID}&action=edit`;
    return (
      <div className="home container">
        <Hero
          title={this.state.cmsData.heroTitle || 'Title'}
          subTitle={this.state.cmsData.heroSubTitle || 'Sub title'}
          linkUrl={this.state.cmsData.linkUrl || '/'}
          linkType={this.state.cmsData.linkType || 'to'}
          linkText={this.state.cmsData.linkText || 'Click here'}
          showEdit={showEdit}
          editUrl={editUrl}
          colour="blue"
        />
        <div className="row">
          {featuredItems}
        </div>
      </div>
    );
  }
}

export default Home;
