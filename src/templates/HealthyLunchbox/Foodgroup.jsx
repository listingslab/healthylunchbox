/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/HealthyLunchbox/Foodgroup
 */

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import ScreenSelector from './ScreenSelector/ScreenSelector';
import './HLB.scss';

class Foodgroup extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this)
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // $('#screen-selector').hide();
  }

  componentWillUnmount() {
  }

  render() {

    // console.log('render hlb');
    return (
      <div className="hlb container">
        <div className="row">
          <ScreenSelector foodgroup={this.props.routeParams.foodgroup}/>
        </div>
      </div>
    );
  }
}

export default Foodgroup;
