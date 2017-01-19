/**
 * Created by Chris Dorward on 18/01/2017
 * container/Template
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Featured extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>Featured Content</div>
    );
  }
}

export default connect()(Featured);
