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
        <Jumbotron />

        <div className="container">
          <div className="row">
              <CategoryTile
                title="Featured 1"
                image="/img/default_category_image.png"
                desc="Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Etiam porta sem malesuada magna mollis
                euismod. Donec sed odio dui."
                link="/featured/1"
              />

              <CategoryTile
                title="Featured 2"
                image="/img/default_category_image.png"
                desc="Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Etiam porta sem malesuada magna mollis
                euismod. Donec sed odio dui."
                link="/featured/2"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
