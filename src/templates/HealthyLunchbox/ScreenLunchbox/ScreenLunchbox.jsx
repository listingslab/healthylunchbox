/* global cms */
/**
 * Created by Chris Dorward on 04/02/2017
 * components/ScreenLunchbox/ScreenLunchbox
 */

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';

function ScreenLunchbox(props) {
  //console.log('ScreenLunchbox Render');
  //console.log(cms.builder);

  const selectFoodgroup = (foodgroup) => {
    cms.builder.currentFoodgroup = foodgroup;
    browserHistory.push(`/healthy-lunch-box/${cms.builder.currentFoodgroup}`);
  };

  let cereals = null;
  if (cms.builder.cereals === 0) {
    cereals = (
      <div
        onClick={() => selectFoodgroup('breads-cereals')}
        className="cereals row builder-1-bottom-dash builder-1-right-dash builder-screen-1-tile">
        <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
          <img
            alt="HLB"
            src="/img/builder/bread-icon.png"
            className="builder-screen-1-img builder-screen-1-align img-responsive"
        /></div>
        <div className="col-xs-7 col-md-7 builder-screen-1-align">
          <h2>Breads &amp;
        <br /> Cereals</h2></div>
      </div>
    );
  }else{
    cereals = (
      <div
        onClick={() => selectFoodgroup('breads-cereals')}
        className="cereals-selected row builder-1-bottom-dash builder-1-right-dash builder-screen-1-tile">
        <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
          <img
            alt="HLB"
            src={cms.builder.cereals.acf.image.url || '/img/builder/bread-icon.png'}
            className="builder-screen-1-img builder-screen-1-align img-responsive"
        /></div>
        <div className="col-xs-7 col-md-7 builder-screen-1-align">
          <h2>{cms.builder.cereals.post.post_title || 'Breads & Cereals'}</h2></div>
      </div>);
  }

  let water = null;
  if (cms.builder.water === 0) {
    water = (
      <div
        onClick={() => selectFoodgroup('water')}
        className="water water-inner col-xs-4 builder-screen-1-item">
          <div className="row builder-screen-1-tile builder-screen-1-tile-center">
            <img
              src="/img/builder/water-icon.png"
              alt="Water"
              className="builder-screen-1-img img-responsive"
            />
            <h2>Water</h2>
          </div>
      </div>);
  } else {
    water = (
      <div
        onClick={() => selectFoodgroup('water')}
        className="water water-selected col-xs-4 builder-screen-1-item">
          <div className="row builder-screen-1-tile builder-screen-1-tile-center">
            <img
              src="/img/builder/water-icon.png"
              alt="Water"
              className="builder-screen-1-img img-responsive"
            />
            <h2>Water</h2>
          </div>
      </div>);
  }

  let salad = null;
  if (cms.builder.salad === 0) {

    salad = (<div
      onClick={() => selectFoodgroup('vegetables-salads')}
      className="vegies row builder-1-right-dash builder-screen-1-tile">
      <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
        <img
          src="/img/builder/carrot-icon.png"
          alt="Vegies and Salad"
          className="builder-screen-1-img builder-screen-1-align img-responsive"
        />
      </div>
      <div className="col-xs-7 col-md-7 builder-screen-1-align">
        <h2>{'' || 'Vegies & Salad'}</h2>
      </div>
    </div>);
  } else {
    //console.log (cms.builder.salad.post.post_title);
    salad = (<div
      onClick={() => selectFoodgroup('vegetables-salads')}
      className="vegies salad-selected row builder-1-right-dash builder-screen-1-tile">
      <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
        <img
          src={cms.builder.salad.acf.image.url || '/img/builder/water-icon.png'}
          alt={cms.builder.salad.post.post_title || 'Vegies & Salad'}
          className="builder-screen-1-img builder-screen-1-align img-responsive"
        />
      </div>
      <div className="col-xs-7 col-md-7 builder-screen-1-align">
        <h2>{cms.builder.salad.post.post_title || 'Vegies & Salad'}</h2>
      </div>
    </div>);
  }

  let meat = null;
  if (cms.builder.meat === 0) {
    meat = (
    <div
      onClick={() => selectFoodgroup('meat-alternatives')}
      className="meat col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center" >
      <img
        alt="Meats and Alternatives"
        src="/img/builder/meat-icon.png"
        className="builder-screen-1-img img-responsive" />
      <h2>Meats &amp;<br /> Alternatives</h2>
    </div>);
  } else {
    meat = (
    <div
      onClick={() => selectFoodgroup('meat-alternatives')}
      className="meat meat-selected col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center" >
      <img
        src={cms.builder.meat.acf.image.url || '/img/builder/meat-icon.png'}
        alt={cms.builder.meat.post.post_title || 'Vegies & Salad'}
        className="builder-screen-1-img img-responsive" />
      <h2>{cms.builder.meat.post.post_title || 'Meats & Alternatives'}</h2>
    </div>);
  }

  let dairy = null;
  if (cms.builder.dairy === 0) {
    dairy = (
      <div
        onClick={() => selectFoodgroup('dairy')}
        className="dairy col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
        <img src="/img/builder/dairy-icon.png" className="builder-screen-1-img img-responsive" />
        <h2>Dairy</h2>
      </div>);
  } else {
    dairy = (
      <div
        onClick={() => selectFoodgroup('dairy')}
        className="dairy dairy-selected col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
        <img
          src={cms.builder.dairy.acf.image.url || '/img/builder/dairy-icon.png'}
          alt={cms.builder.dairy.post.post_title || 'Dairy'}
          className="builder-screen-1-img img-responsive"
        />
        <h2>Dairy</h2>
      </div>);
  }

  return (
    <div id="screen-lunchbox" className="screen-lunchbox margin-top-25">
      <div className="container">
          <div className="row">
            <div className="builder-screen-1">
                <div className="builder-screen-1-lunchbox">
                <div className="row builder-1-row-responsive">
                  <div className="col-xs-8 builder-screen-1-item">

                      {cereals}

                      {salad}
                    </div>

                    {water}

                </div>
                <div className="row row-eq-height builder-1-row-responsive">

                  {meat}
                  {dairy}

                  <div
                    onClick={() => selectFoodgroup('fruit')}
                    className="fruits col-xs-4 builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
                    <img src="/img/builder/fruit-icon.png" alt="HLB" className="builder-screen-1-img img-responsive" />
                    <h2>Fruits</h2>
                  </div>
                </div>
                <div className="border-1-item-tab" />
                 </div>
            </div>
                <div className="border-1-prompt-box">
                <h4>Lets start building!</h4>
                <h3>Select any food group to begin.</h3>
              </div>
          </div>
        </div>
      </div>
  );
}

ScreenLunchbox.propTypes = {
};

export default ScreenLunchbox;
