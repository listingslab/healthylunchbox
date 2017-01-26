/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import $ from 'jquery';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';

class Home extends Component {
  componentDidMount() {
    this.renderBuyButton();
  }

  renderBuyButton() {
    $('.homeshit').html(
      'ooh ra'
    );
    $('.homeshit').fadeOut();
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
        header={''}
        shortDescription={''}
        btnType={''}
      />);
    }
    return (
      <div className="home container">
        <div className="homeshit">
          homeshit
        </div>
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
