/**
 * Created by Chris Dorward on 16/01/2017
 * templates/HealthyLunchbox/HealthyLunchbox
 */

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import ScreenLunchbox from './ScreenLunchbox/ScreenLunchbox';
import ScreenSelector from './ScreenSelector/ScreenSelector';
import './HealthyLunchbox.scss';

class HealthyLunchbox extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      endPoint: 'app'
    };
  }

  componentDidMount() {
    // this.hideHeader();
    $('#screen-selector').hide();
  }

  componentWillUnmount() {
    // this.showHeader();
  }

  hideHeader() {
    $('#hlb-header').hide();
    console.log('dsajdhaus');
    // $('#hlbBreadcrumb').hide();
  }

  showHeader() {
    $('#hlb-header').show();
    // $('#hlbBreadcrumb').show();
  }

  render() {
    return (
      <div className="hlb container">
        <div className="row">
          <ScreenSelector />
          <ScreenLunchbox />
        </div>
      </div>
    );
  }
}

export default HealthyLunchbox;
