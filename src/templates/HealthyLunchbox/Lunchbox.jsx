/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/HealthyLunchbox/Lunchbox
 */

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import { Link, browserHistory } from 'react-router';
import ScreenLunchbox from './ScreenLunchbox/ScreenLunchbox';
import './HLB.scss';

class Lunchbox extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this)
    this.state = { date: new Date() };
    cms.builder = {};
  }

  componentDidMount() {
    // $('#screen-selector').hide();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="hlb container">
        <div className="row">
          <ScreenLunchbox />
        </div>
      </div>
    );
  }
}

export default Lunchbox;

/*
$('#screen-lunchbox').fadeIn('fast');
$('#screen-selector').hide();

console.log(cms.builder.currentFoodgroup);
$('#screen-lunchbox').hide();
$('#screen-selector').fadeIn('fast');
// const newdate = new Date();
// this.setState({ date: newdate });
*/
