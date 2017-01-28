/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import $ from 'jquery';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';
import Loader from '../../components/Loader/Loader';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      isFetching: false,
      apiRoute: 'http://api.healthylunchbox.com.au/wp-json/hlbapi/home',
      cmsData: {
        heroTitle: '',
        heroSubTitle: '',
        isLoggedIn: false
      }
    };
  }

  componentDidMount() {
    this.cmsCallback('JSONPayload');
    // $.getJSON(this.state.apiRoute, this.cmsCallback.bind(this));
  }

  cmsCallback() {
    this.setState = {
      isFetching: 'fslfigouhuo hgo ugou',
      ljsff: 'lsjdfunfu'
    };

    console.log(this.state);

    /*
    this.setState = {
      isLoaded: true,
      isFetching: false,
      apiRoute: 'http://api.healthylunchbox.com.au/wp-json/hlbapi/home',
      cmsData: {
        heroTitle: JSONPayload.data.hero.heroTitle,
        heroSubTitle: JSONPayload.data.hero.heroSubTitle,
        linkText: JSONPayload.data.hero.linkText,
        linkUrl: JSONPayload.data.hero.linkUrl,
        linkType: JSONPayload.data.hero.linkType,
        isLoggedIn: false
      }
    };
    */
  };


  render() {
    console.log('HOME RENDER');
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
    // If we've got some data....
    let showEdit = false;
    if (this.state.cmsData.isLoggedIn) {
      showEdit = true;
    }
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
