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
        heroTitle: 'Sponge bob',
        heroSubTitle: 'Square pants',
        linkText: 'Poke my bum',
        linkType: 'to',
        linkUrl: 'healthy-lunch-box'
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
        linkType: cmsData.data.hero.linkType
      } });
  }

  render() {
    // console.log('HOME RENDER');
    const featuredItemsArr = [];
    const featuredItems = [];
    for (let i = 0; i < featuredItemsArr.length; i += 1) {
      featuredItems.push(<Tile
        key={`featured_${i}`}
        editLink={''}
        link={''}
        header={this.state.heroTitle}
        shortDescription={''}
        btnType={''}
      />);
    }
    if (!this.state.isLoaded) {
      const loader = (<Loader
        text="Loading Healthy Lunch Box"
        />);
      return loader;
    }
    const showEdit = true;
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
          colour="daffodil"
        />
        <div className="row">
          {featuredItems}
        </div>
      </div>
    );
  }
}

export default Home;
