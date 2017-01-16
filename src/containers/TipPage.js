/**
 * Created by Chris Dorward on 16/01/2017
 * Tips Page (shows single tip)
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TipPage extends Component {
  static propTypes = {
  }

  componentWillMount() {
    // loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.fullName !== this.props.fullName) {
      // loadData(nextProps);
    // }
  }

  render() {
    return (
      <div>
        <h3>This is a single tip</h3>
      </div>
    );
  }
}

export default connect()(TipPage);
