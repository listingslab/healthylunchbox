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
    if (cms.builder === undefined) {
      cms.builder = {};
      cms.builder.cereals = 0;
      cms.builder.salad = 0;
      cms.builder.meat = 0;
      cms.builder.dairy = 0;
      cms.builder.fruit = 0;
      cms.builder.water = 0;
    }
  }

  componentDidMount() {
    $('#hlb-content').addClass('healthy-lunch-box-bg');
  }

  componentWillUnmount() {
    $('#hlb-content').removeClass('healthy-lunch-box-bg');
  }

  render() {
    return (
      <div className="container">
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
