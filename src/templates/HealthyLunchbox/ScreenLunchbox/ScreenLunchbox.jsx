/* global cms */
/* global editor */
/**
 * Created by Chris Dorward on 04/02/2017
 * components/ScreenLunchbox/ScreenLunchbox
 */

import React from 'react';
import { browserHistory } from 'react-router';
// import $ from 'jquery';
import EditLink from '../../../components/EditLink/EditLink';

function ScreenLunchbox() {
  const foodgroupClicked = (foodgroup) => {
    cms.builder.currentFoodgroup = foodgroup;
    browserHistory.push(`/healthy-lunch-box/${cms.builder.currentFoodgroup}`);
  };

  const startOver = () => {
    // alert('Start Over');
  };

  const makeMarkup = (html) => {
    return { __html: html };
  };

  const lunchboxHeader = cms.app.data.lunchbox.content.data.lunchbox_header || '';

  let breadsTitle = null;
  let dairyTitle = null;
  let fruitTitle = null;
  let meatTitle = null;
  let vegetablesTitle = null;
  let waterTitle = null;
  let breadsIcon = null;
  let dairyIcon = null;
  let fruitIcon = null;
  let meatIcon = null;
  let vegetablesIcon = null;
  let waterIcon = null;
  for (let i = 0; i < cms.app.data.lunchbox.foodgroups.length; i += 1) {
    switch (cms.app.data.lunchbox.foodgroups[i].category.slug) {
    case 'breads-cereals':
      breadsTitle = cms.app.data.lunchbox.foodgroups[i].info.foodgroup_name;
      breadsIcon = cms.app.data.lunchbox.foodgroups[i].info.icon;
      break;
    case 'dairy':
      dairyTitle = cms.app.data.lunchbox.foodgroups[i].info.foodgroup_name;
      dairyIcon = cms.app.data.lunchbox.foodgroups[i].info.icon;
      break;
    case 'fruit':
      fruitTitle = cms.app.data.lunchbox.foodgroups[i].info.foodgroup_name;
      fruitIcon = cms.app.data.lunchbox.foodgroups[i].info.icon;
      break;
    case 'meat-alternatives':
      meatTitle = cms.app.data.lunchbox.foodgroups[i].info.foodgroup_name;
      meatIcon = cms.app.data.lunchbox.foodgroups[i].info.icon;
      break;
    case 'vegetables-salads':
      vegetablesTitle = cms.app.data.lunchbox.foodgroups[i].info.foodgroup_name;
      vegetablesIcon = cms.app.data.lunchbox.foodgroups[i].info.icon;
      break;
    case 'water':
      waterTitle = cms.app.data.lunchbox.foodgroups[i].info.foodgroup_name;
      waterIcon = cms.app.data.lunchbox.foodgroups[i].info.icon;
      break;
    default:
      break;
    }
  }
  const completedItems = 0;
  /*

  cms.builder.cereals = 0;
  cms.builder.salad = 0;
  cms.builder.meat = 0;
  cms.builder.dairy = 0;
  cms.builder.fruit = 0;
  cms.builder.water = 0;
  */
  let promptSmall = null;
  let promptLarge = null;
  if (completedItems === 0) {
    promptSmall = cms.app.data.lunchbox.content.data.completed_items_s_0 || '';
    promptLarge = cms.app.data.lunchbox.content.data.completed_items_l_0 || '';
  }
  const editURL = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=1083&action=edit';
  let editBtn = null;
  if (editor) { editBtn = (<EditLink editUrl={editURL || ''} />); }

  let cereals = null;
  if (cms.builder.cereals === 0) {
    cereals = (
      <div
        onClick={() => foodgroupClicked('breads-cereals')}
        className="itemClickable row builder-1-bottom-dash builder-1-right-dash builder-screen-1-tile"
      >
        <div
          className="col-xs-5 col-md-5 builder-screen-1-tile-center">
          <img
            alt={breadsTitle}
            src={breadsIcon}
            className="builder-screen-1-img builder-screen-1-align img-responsive"
          />
        </div>
        <div
          className="col-xs-7 col-md-7 builder-screen-1-align">
          <h2 dangerouslySetInnerHTML={makeMarkup(breadsTitle)} />
        </div>
      </div>);
  } else {
    cereals = (
      <div
        onClick={() => foodgroupClicked('breads-cereals')}
        className="itemClickable row builder-1-bottom-dash builder-1-right-dash builder-screen-1-tile"
      >
        <div
          className="col-xs-5 col-md-5 builder-screen-1-tile-center">
          <img
            alt={breadsTitle}
            src={cms.builder.cereals.acf.image || breadsIcon}
            className="builder-screen-1-img builder-screen-1-align img-responsive"
          />
        </div>
        <div
          className="col-xs-7 col-md-7 builder-screen-1-align">
          <h2 dangerouslySetInnerHTML={makeMarkup(breadsTitle)} />
        </div>
      </div>);
  }


  return (
    <div className="healthy-lunch-box">
    <div className="container">

      <div className="row margin-bottom-10">
        <div className="builder-screen-1-lunchbox-heading">
          <div className="builder-screen-1-lunchbox-title">
            <h1>{lunchboxHeader}</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="builder-screen-1">
          <div className="builder-screen-1-lunchbox">
            <div className="row builder-1-row-responsive">
              <div className="col-xs-8 builder-screen-1-item">
                {cereals}


                <div
                  onClick={() => foodgroupClicked('vegetables-salads')}
                  className="itemClickable row builder-1-right-dash builder-screen-1-tile"
                >
                  <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
                    <img
                      alt={vegetablesTitle}
                      src={vegetablesIcon}
                      className="builder-screen-1-img builder-screen-1-align img-responsive"
                    />
                  </div>
                  <div className="col-xs-7 col-md-7 builder-screen-1-align">
                    <h2 dangerouslySetInnerHTML={makeMarkup(vegetablesTitle)} />
                  </div>
                </div>

              </div>

                <div
                  onClick={() => foodgroupClicked('water')}
                  className="itemClickable col-xs-4 builder-screen-1-item"
                >
                  <div className="row builder-screen-1-tile builder-screen-1-tile-center">
                    <img
                      alt={waterTitle}
                      src={waterIcon}
                      className="builder-screen-1-img img-responsive"
                    />
                  <h2 dangerouslySetInnerHTML={makeMarkup(waterTitle)} />
                  </div>
                </div>

            </div>
            <div className="row row-eq-height builder-1-row-responsive">

              <div
                onClick={() => foodgroupClicked('meat-alternatives')}
                className="itemClickable col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center "
              >
                <img
                  alt={meatTitle}
                  src={meatIcon}
                  className="builder-screen-1-img img-responsive"
                />
              <h2 dangerouslySetInnerHTML={makeMarkup(meatTitle)} />
              </div>

              <div
                onClick={() => foodgroupClicked('dairy')}
                className="itemClickable col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center"
              >
                <img
                  alt={dairyTitle}
                  src={dairyIcon}
                  className="builder-screen-1-img img-responsive"
                />
              <h2 dangerouslySetInnerHTML={makeMarkup(dairyTitle)} />
              </div>

              <div
                onClick={() => foodgroupClicked('fruit')}
                className="itemClickable col-xs-4 builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center"
              >
                <img
                  alt={fruitTitle}
                  src={fruitIcon}
                  className="builder-screen-1-img img-responsive"
                />
              <h2 dangerouslySetInnerHTML={makeMarkup(fruitTitle)} />
              </div>

            </div>

            <div className="border-1-item-tab" />

          </div>

          <div className="builder-1-start-over-button">
            <button
              onClick={startOver}
              className="btn blue-circle-button"
            >
            <img
              alt="start over"
              src="/img/builder/start-over-arrow.png"
              className="img-responsive builder-1-start-over-icon"
            />
            <h4>START<br />OVER</h4>
            </button>
          </div>

        </div>


      </div>

    </div>
    <div className="border-1-prompt-box">
      <h4>{promptSmall}</h4>
      <h3>{promptLarge}</h3>
    </div>
    {editBtn}
  </div>
  );
}

ScreenLunchbox.propTypes = {

};

export default ScreenLunchbox;
