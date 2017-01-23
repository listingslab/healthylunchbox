/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedTile from '../../components/FeaturedTile';
import Hero from '../../components/Hero/Hero';

import HomeData from '../../testData/HomeData';
import './Home.scss';

class Home extends Component {
  static propTypes = {
  }

  render() {
    console.log(HomeData);
    return (
      <div className="home">
        <Hero
          header="Homepage Hero"
          shortDescription="Short description for Homepage Hero"
          url="/recipes"
          linkText="Call to action"
        />
      </div>
    );
  }
}

export default connect()(Home);

/*
<div className="alert alert-warning" role="alert">
  <strong>Warning!</strong> Best check yo self.
</div>
<div className="container">
  <Jumbotron
    header="healthylunchbox.com.au"
    shortDescription="This popular 25-minute session is run by Cancer Council NSW."
    url="/builder"
    url_accessible="http://api.healthylunchbox.com.au/home/accessible/"
    linkText="Go. build a lunchbox"
  />
  <div className="row">
    <FeaturedTile
      postId="543"
      title="Featured Recipe"
      link="/item"
      linkType="internal"
      shortDescription="Links to featured recipe"
      props={this.props} />
    <FeaturedTile
      postId="590"
      title="Featured Tip"
      link="/item"
      linkType="internal"
      shortDescription="Links to featured tip"
      props={this.props} />
  </div>
</div>
*/
