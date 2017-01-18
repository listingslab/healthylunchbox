/**
 * Created by Chris Dorward on 18/01/2017
 * container/About
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>About</div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(About);
