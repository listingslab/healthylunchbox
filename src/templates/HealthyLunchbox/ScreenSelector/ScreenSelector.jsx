/* global cms */
/**
 * Created by Chris Dorward on 05/02/2017
 * components/ScreenSelector/ScreenSelector
 */

import React, { PropTypes } from 'react';
import $ from 'jquery';

function ScreenSelector(props) {

  console.log(cms.app.data.lunchbox);
  const text = props.text || 'default';

  const alertMessage = (e) => {
    console.log(e);
  };

  return (
    <div id="screen-selector" className="screen-selector margin-top-25">
      <div className="builder-screen-2-header">
  <div className="row builder-screen-2-header-back">
    <span className="glyphicon glyphicon-arrow-left btn-lg" aria-hidden="true"></span>
  </div>

  <div className="row row-eq-height">
    <div className="col-sm-1 hidden-xs"></div>
    <div className="col-xs-2 col-sm-1">
      <img src="/img/builder/green-carrot.png" className="img-responsive builder-screen-2-header-img" />
    </div>
    <div className="col-xs-4 col-sm-4 builder-screen-2-header-title">
      <h2>Vegies &amp;<br />Salads</h2>
    </div>
    <div className="col-xs-6 col-sm-5 builder-screen-2-header-text">
      <p>Eating vegies and salads helps maintain a healthy weight and can help to prevent cancer.</p>
    </div>
    <div className="col-md-1 hidden-xs"></div>
  </div>
</div>
    </div>
  );
}

ScreenSelector.propTypes = {
  text: PropTypes.string
};

export default ScreenSelector;
