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
      isLoaded: false,
      isFetching: false,
      pageData: {
        heroTitle:'This is the hero title'
      }
    };
  }

  componentDidMount() {
    const dismissMessage = () => {
      this.setState({
        isLoaded: true,
        pageData: {

        }
      });
    };
    if (!this.state.isLoaded) {
      console.log('Load the thing');
      setTimeout(dismissMessage, 2000);
    }
  }

  render() {
    console.log('RENDER HOME');
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
        text="Loading home page"
        />);
      return loader;
    }
    const showEdit = true;
    const editUrl = true;
    return (
      <div className="home container">
        <Hero
          url={'/'}
          colour="green"
          title="Hero"
          subTitle="daekhsf"
          showEdit={showEdit}
          editUrl={editUrl}
          linkText="nnn"
        />
      <div className="row">
          {featuredItems}
        </div>
      </div>
    );
  }
}

export default Home;
