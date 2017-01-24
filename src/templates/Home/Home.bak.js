/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedTile from '../../components/FeaturedTile/FeaturedTile';
import Hero from '../../components/Hero/Hero';
import HomeData from './HomeData';
import './Home.scss';

class Home extends Component {
  static propTypes = {
  }

  render() {
    const show = false;
    const featured = [];
    // button types: default, primary, success, info, warning, danger, link
    for (let i = 0; i < HomeData.data.featured.length; i += 1) {
      const itemData = HomeData.data.featured[i];
      const className = `featured-btn-${itemData.btnType}`;
      const navKey = `featured_${i}`;
      featured.push(
        <FeaturedTile
          key={navKey}
          header={itemData.header}
          link={itemData.link}
          btnType={itemData.btnType}
          shortDescription={itemData.shortDescription}
          className={className}
          itemData={itemData}
        />
      );
    }

    return (
      <div className="home container">

          <Hero
            header={HomeData.data.hero.header || 'header'}
            shortDescription={HomeData.data.hero.shortDescription || 'shortDescription'}
            link={HomeData.data.hero.link || '/'}
            linkText={HomeData.data.hero.linkText || 'linkText'}
          />

          <div className="row">
            {featured}
          </div>
      </div>
    );
  }
}

export default connect()(Home);

/*
*/
