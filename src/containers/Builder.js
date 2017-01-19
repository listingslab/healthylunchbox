/**
 * Created by Chris Dorward on 18/01/2017
 * container/Builder
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Builder extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>Builder</div>
    );
  }
}

export default connect()(Builder);
