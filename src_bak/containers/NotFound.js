/**
 * Created by Chris Dorward on 16/01/2017
 * NotFound - shown if no route exists
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

class NotFound extends Component {

  componentWillMount() {
    // loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div>
        <h3>Not Found</h3>
      </div>
    );
  }
}

export default connect()(NotFound);
