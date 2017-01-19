/**
 * Created by Chris Dorward on 16/01/2017
 * container/NotFound
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>Not Found</div>
    );
  }
}

export default connect()(NotFound);
