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
    cms.builder = {};
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

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
    					<div className="builder-2-card">
    						<img src="assets/green-carrot.png" className="img-responsive builder-screen-2-card-img" />
    							<div className="builder-2-card-text">
    								<h4>Leftover baked vegies</h4>
    								<p>Great in sandwiches or as snacks!</p>
    							</div>

    					</div>
    		   		</div>
        </div>
      </div>
    );
  }
}

export default Foodgroup;
