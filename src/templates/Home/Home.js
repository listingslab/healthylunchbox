/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';

class Home extends Component {
  render() {
    const featuredItemsArr = [];
    const featuredItems = [];
    /*
    {
      type: 'featured',
      postType: 'tip'
    }
    */
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
