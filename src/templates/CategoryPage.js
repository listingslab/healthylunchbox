/**
 * Created by Chris Dorward on 22/01/2017
 * templates/CategoryPage
 * routes: /categorypage/xxx
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class CategoryPage extends Component {
  static propTypes = {
  }
  render() {
    return (
      <div className="container">
        <h2>CategoryPage</h2>
        <p>List of items in a category</p>
      </div>
    );
  }
}

export default connect()(CategoryPage);

/*

*/
