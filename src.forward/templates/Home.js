/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from '../components/Jumbotron';
import CategoryTile from '../components/CategoryTile';

class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-home">
        <div className="container">
          <Jumbotron />
        </div>

        <div className="container">
          <div className="row">
              <CategoryTile
                title="Banana cake"
                image="http://api.healthylunchbox.com.au/wp-content/uploads/Banana-bread-250x250.jpg"
                desc="This banana cake is an easy way to quickly put something delicious in a lunchbox "
                link="/recipe/497"
              />

              <CategoryTile
                title="Cancer Council News"
                image="/img/default_category_image.png"
                desc="Cancer Council is pleasedd to announce... Cancer Council is pleasedd to announce..."
                link="/about"
              />

              <CategoryTile
                title="Prepare the night before"
                image="http://api.healthylunchbox.com.au/wp-content/uploads/preparing-school-lunch-250x250.jpg"
                desc="In this tip, we'll discover the basics of food safety starting with
                preparing the night before"
                link="/tip/123"
              />

              <CategoryTile
                title="Second Featured Recipe"
                image="/img/default_category_image.png"
                desc="This banana cake is an easy way to quickly put something delicious in a lunchbox "
                link="/recipe/497"
              />

          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
