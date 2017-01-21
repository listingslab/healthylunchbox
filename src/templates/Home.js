/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from '../components/Jumbotron';
import FeaturedTile from '../components/FeaturedTile';

class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-home">
        <div className="container">
          <div className="alert alert-warning" role="alert">
            <strong>Warning!</strong> Best check yo self.
          </div>
          <Jumbotron />
          <div className="row">
            <FeaturedTile
              featuredType="Recipes"
              title="Easy fried rice"
              link="/"
              catLink="/recipes"
              thumbnail="/img/daffs/green.png"
              id="543"
              shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              props={this.props} />

            <FeaturedTile
              featuredType="Tips"
              catLink="/tips"
              title="Things you didn't know you could freeze"
              link="/"
              thumbnail="/img/daffs/orange.png"
              id="501"
              shortDescription="Redacted from the content of the featured item which must be added to the api"
              props={this.props} />

          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
