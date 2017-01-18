/**
 * Created by Chris Dorward on 16/01/2017
 * container/Tips
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Recipies extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>Recipies</div>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Recipies);
