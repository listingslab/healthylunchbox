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
      </div>
    );
  }
}

export default connect()(Home);
