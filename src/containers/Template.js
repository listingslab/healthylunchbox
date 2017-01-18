/**
 * Created by Chris Dorward on 18/01/2017
 * container/Template
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Template extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>Template</div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Template);
