/**
 * Created by Chris Dorward on 18/01/2017
 * templates/Builder
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Builder extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-builder">
        <img className="img-responsive" src="/img/lunchbox.png" alt="lunchbox" />
      </div>
    );
  }
}

export default connect()(Builder);
