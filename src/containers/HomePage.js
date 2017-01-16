/**
 * Created by Chris Dorward on 16/01/2017
 * Tips Page (shows tips categories)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

class HomePage extends Component {

  componentWillMount() {
    // loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
      </div>
    );
  }
}

export default connect()(HomePage);
