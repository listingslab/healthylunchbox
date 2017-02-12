/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 12/02/2017
 * components/HealthySwap/HealthySwap
 */

import React, { PropTypes } from 'react';
import './HealthySwap.scss';

function HealthySwap(props) {
  console.log(props.swapData.acf);
  const unhealthyImage = props.swapData.acf.image.url || '/img/swaps/chips.jpg';
  const headerTitle = props.swapData.acf.unhealthy_food_title || 'Swap this';
  return (
    <div className="swap-wrap container">

      <div className="row row-eq-height hidden-xs">
        <div className="col-sm-4 col-xs-12 swap-header-banner">

          <div className="col-sm-8 col-xs-12 swap-header-banner">
            <div className="swap-header-text">
              <h2>{headerTitle}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row visible-xs">
        <div className="col-xs-12 swap-header-banner ">

      </div>

      <div className="col-xs-12 swap-header-banner">
        <div className="swap-header-text">
          <h2>Swap potato chips for these healthy snacks instead!</h2>
        </div>
      </div>
    </div>

    <div className="row swap-header-arrows-row row-eq-height">
      <div className="col-sm-4 col-xs-12">
        <div className="swap-header-banner-arrow" />
      </div>
      <div className="col-sm-4 hidden-xs">
         <div className="swap-header-banner-arrow" />
      </div>
      <div className="col-sm-4 hidden-xs">
          <div className="swap-header-banner-arrow" />
      </div>
    </div>

    <div className="row">

      <div className="col-md-4 col-sm-4 col-xs-6">
        <div className="swap-item">
          <img
            alt="asd"
            src="/img/swaps/granola-fruit.jpg"
            className=" img-responsive" />
          <div className="swap-content">
            <h3>Granola and milk with fresh fruit</h3>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-4 col-xs-6">
        <div className="swap-item">
          <img
            alt="asd"
            src="/img/swaps/granola-fruit.jpg"
            className=" img-responsive" />
          <div className="swap-content">
            <h3>Carrot &amp; celery sticks with <a href="#">spinach dip</a></h3>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="swap-item">
          <div className="swap-img">
          <img
            alt="asd"
            src="/img/swaps/granola-fruit.jpg"
            className=" img-responsive" />
          </div>
          <div className="swap-content">
            <h3>Granola and milk with fresh fruit</h3>
          </div>
        </div>
      </div>

    </div>

  </div>
  );
}

HealthySwap.propTypes = {
  swapData: PropTypes.any.isRequired
};

export default HealthySwap;

/*

<div className="swap-image-overlay-small_">
  <img
    alt={props.swapData.post_name || 'Unhealthy option'}
    src={unhealthyImage}
    className="img-responsive"
  />
</div>
*/
