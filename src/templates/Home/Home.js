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
    for (let i = 0; i < featuredItemsArr.length; i += 1) {
      featuredItems.push(<Tile
        key={`featured_${i}`}
<<<<<<< HEAD
        editLink={featuredItemsArr[i].edit_link}
        link="recipe"
        header={featuredItemsArr[i].post_title}
        shortDescription={featuredItemsArr[i].short_description}
        btnType={featuredItemsArr[i].post_type}
=======
        editLink={''}
        link={''}
        header={''}
        shortDescription={''}
        btnType={''}
>>>>>>> feature/Redux
      />);
    }

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="home container">
        <Hero
<<<<<<< HEAD
          editLink={this.props.posts.data.edit_link}
          hero={this.props.posts.data.hero}
        />
<div className="row">
        <Slider {...sliderSettings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
      </div>
        <div className="row">
=======
          editLink={''}
          hero={''}
        />
      <div className="row">
>>>>>>> feature/Redux
          {featuredItems}
        </div>
      </div>
    );
  }
}

export default Home;
