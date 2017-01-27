/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';
import Loader from '../../components/Loader/Loader';

class Home extends Component {
  render() {
    console.log('RENDER HOME');
    const showLoader = true;
    const featuredItemsArr = [];
    const featuredItems = [];
    for (let i = 0; i < featuredItemsArr.length; i += 1) {
      featuredItems.push(<Tile
        key={`featured_${i}`}
        editLink={''}
        link={''}
        header={''}
        shortDescription={''}
        btnType={''}
      />);
    }
    if (showLoader) {
      const loader = (<Loader
        text="Loading home page"
        />);
      return loader;
    }
    return (
      <div className="home container">
        <Hero
          editLink={''}
          hero={''}
        />
      <div className="row">
          {featuredItems}
        </div>
      </div>
    );
  }
}

export default Home;
