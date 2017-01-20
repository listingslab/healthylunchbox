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
          <Jumbotron />
          <div className="row">
            <FeaturedTile
              featuredType="Recipe"
              title="Easy fried rice"
              thumbnail="http://api.healthylunchbox.com.au/wp-content/uploads/Easy-fried-rice-1.jpg"
              id="543"
              shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              props={this.props} />

            <FeaturedTile
              featuredType="Tip"
              title="Things you didn't know you could freeze"
              thumbnail="http://api.healthylunchbox.com.au/wp-content/uploads/things-you-can-freeze-250x250.jpg"
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
