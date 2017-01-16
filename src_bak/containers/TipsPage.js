/**
 * Created by Chris Dorward on 16/01/2017
 * Tips Page (shows tips categories)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TipsPage extends Component {

  componentWillMount() {
    // loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div>
        <h3>Tips Categories</h3>
        <Link to="/tip/123">tip 123</Link>
      </div>
    );
  }
}

export default connect()(TipsPage);
