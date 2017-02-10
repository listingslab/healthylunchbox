/* global cms */
/**
 * Created by Chris Dorward on 04/02/2017
 * components/ScreenLunchbox/ScreenLunchbox
 */

import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';

function ScreenLunchbox() {
  const selectFoodgroup = (foodgroup) => {
    cms.builder.currentFoodgroup = foodgroup;
    browserHistory.push(`/healthy-lunch-box/${cms.builder.currentFoodgroup}`);
  };

  const startOver = () => {
    alert('Start Over');
  };

  let cereals = null;
  if (cms.builder.cereals === 0) {

  }

  return (
    <div className="healthy-lunch-box container">

      <div className="row margin-bottom-10">
        <div className="builder-screen-1-lunchbox-heading">
          <div className="builder-screen-1-lunchbox-title">
            <h1>A healthy lunchbox contains...</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="builder-screen-1">
          <div className="builder-screen-1-lunchbox">
            <div className="row builder-1-row-responsive">
              <div className="col-xs-8 builder-screen-1-item">

                <div className="itemClickable row builder-1-bottom-dash builder-1-right-dash builder-screen-1-tile">
                  <div
                    className="col-xs-5 col-md-5 builder-screen-1-tile-center">
                    <img
                      alt="Bread"
                      src="/img/builder/bread-icon.png"
                      className="builder-screen-1-img builder-screen-1-align img-responsive"
                    />
                  </div>
                  <div
                    className="col-xs-7 col-md-7 builder-screen-1-align">
                    <h2>Breads &amp;<br /> Cereals</h2>
                  </div>
                </div>

                <div className="itemClickable row builder-1-right-dash builder-screen-1-tile">
                  <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
                    <img
                      alt="Vegies &amp;<br /> Salad"
                      src="/img/builder/carrot-icon.png"
                      className="builder-screen-1-img builder-screen-1-align img-responsive"
                    />
                  </div>
                  <div className="col-xs-7 col-md-7 builder-screen-1-align">
                    <h2>Vegies &amp;<br /> Salad</h2>
                  </div>
                </div>

              </div>

                <div className="itemClickable col-xs-4 builder-screen-1-item">
                  <div className="row builder-screen-1-tile builder-screen-1-tile-center">
                    <img
                      alt="Water"
                      src="/img/builder/water-icon.png"
                      className="builder-screen-1-img img-responsive"
                    />
                    <h2>Water</h2>
                  </div>
                </div>

            </div>
            <div className="row row-eq-height builder-1-row-responsive">

              <div className="itemClickable col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center ">
                <img
                  alt="Meats &amp;<br /> Alternatives"
                  src="/img/builder/meat-icon.png"
                  className="builder-screen-1-img img-responsive"
                />
                <h2>Meats &amp;<br /> Alternatives</h2>
              </div>

              <div className="itemClickable col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
                <img
                  alt="Dairy"
                  src="/img/builder/dairy-icon.png"
                  className="builder-screen-1-img img-responsive"
                />
                <h2>Dairy </h2>
              </div>

              <div className="itemClickable col-xs-4 builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
                <img
                  alt="Fruits"
                  src="/img/builder/fruit-icon.png"
                  className="builder-screen-1-img img-responsive"
                />
                <h2>Fruits</h2>
              </div>

            </div>

            <div className="border-1-item-tab" />

          </div>

          <div className="builder-1-start-over-button">
            <button className="btn blue-circle-button" href="">
            <img
              alt="start over"
              src="/img/builder/start-over-arrow.png"
              className="img-responsive builder-1-start-over-icon"
            />
            <h4>START<br />OVER</h4>
            </button>
          </div>

        </div>

          <div className="border-1-prompt-box">
            <h4>Lets start building!</h4>
            <h3>Select any food group to begin.</h3>
          </div>
      </div>

    </div>
  );
}

ScreenLunchbox.propTypes = {

};

export default ScreenLunchbox;
