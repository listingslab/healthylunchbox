/**
 * Created by Chris Dorward on 16/01/2017
 * templates/HealthyLunchbox/HealthyLunchbox
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import './HealthyLunchbox.scss';

class HealthyLunchbox extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="hlb container">
        <h1>Lunch Box Builder</h1>
      </div>
    );
  }
}

export default HealthyLunchbox;
