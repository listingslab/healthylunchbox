/* global cms */
/**
 * Created by Chris Dorward on 05/02/2017
 * components/ScreenSelector/ScreenSelector
 */

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';

function ScreenSelector(props) {
  console.log(cms.app.data.foodgroups);
  console.log(props.foodgroup);
  //
  const fgs = cms.app.data.lunchbox.foodgroups;
  let foodgroupData = null;
  for (let i = 0; i < fgs.length; i += 1) {
    if (props.foodgroup === fgs[i].cat.slug) {
      foodgroupData = fgs[i];
    }
  }
  console.log(foodgroupData.cat.description);

  return (
    <div id="screen-selector" className="screen-selector margin-top-25">
      <div className="builder-screen-2-header">
      <div className="row builder-screen-2-header-back">
        <Link
          to="/healthy-lunch-box/"
        >
          <span className="white-arrow glyphicon glyphicon-arrow-left btn-lg" aria-hidden="true" />
        </Link>
      </div>
      <div className="row row-eq-height">
        <div className="col-sm-1 hidden-xs" />
        <div className="col-xs-2 col-sm-1">

        </div>
        <div className="col-xs-4 col-sm-4 builder-screen-2-header-title">
          <h2>{props.foodgroup || ''}</h2>
        </div>
        <div className="col-xs-6 col-sm-5 builder-screen-2-header-text">
          <p>{foodgroupData.cat.description || ''}</p>
        </div>
        <div className="col-md-1 hidden-xs" />
      </div>
    </div>
    </div>
  );
}

ScreenSelector.propTypes = {
  foodgroup: PropTypes.string.isRequired
};

export default ScreenSelector;

/*
<img
  alt="HLB"
  src="/img/builder/green-carrot.png"
  className="img-responsive builder-screen-2-header-img"
/>
*/
