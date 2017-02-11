/* global cms */
/* global editor */
/**
 * Created by Chris Dorward on 05/02/2017
 * components/ScreenSelector/ScreenSelector
 */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
// import $ from 'jquery';
import EditLink from '../../../components/EditLink/EditLink';

function ScreenSelector(props) {
  const backClicked = () => {
    browserHistory.push('/healthy-lunch-box/');
  };

  const makeMarkup = (html) => {
    return { __html: html };
  };

  const foodgroups = cms.app.data.lunchbox.foodgroups;
  let foodgroupData = null;
  for (let i = 0; i < foodgroups.length; i += 1) {
    if (props.foodgroup === foodgroups[i].category.slug) {
      foodgroupData = foodgroups[i];
      break;
    }
  }
  console.log(foodgroupData);
  const headerClass = `builder-screen-2-header foodgroup-${props.foodgroup}`;
  let editBtn = null;
  if (editor) { editBtn = (<EditLink editUrl={foodgroupData.editUrl || ''} />); }
  return (
    <div id="screen-selector" className="container">
      <div className="row">
        <div className={headerClass}>

          <div
            onClick={backClicked}
            className="row builder-screen-2-header-back builder-screen-2-header-bkg"
          >
            <span className="glyphicon glyphicon-arrow-left btn-lg" aria-hidden="true" />
          </div>

          <div className="row row-eq-height">
            <div className="col-sm-1 hidden-xs" />
              <div className="col-xs-2 col-sm-1">
                <img
                  alt={foodgroupData.info.foodgroup_name}
                  src={foodgroupData.info.icon}
                  className="img-responsive builder-screen-2-header-img"
                />
              </div>
              <div className="col-xs-4 col-sm-4 builder-screen-2-header-title">
                <h2 dangerouslySetInnerHTML={makeMarkup(foodgroupData.info.foodgroup_name)} />
              </div>
              <div className="col-xs-6 col-sm-5 builder-screen-2-header-text">
                <h4 dangerouslySetInnerHTML={makeMarkup(foodgroupData.info.foodgroup_leader)} />
              </div>
              <div className="col-md-1 hidden-xs" />
            </div>

          </div>
      </div>
      {editBtn}
    </div>
  );
}

ScreenSelector.propTypes = {
  foodgroup: PropTypes.string.isRequired
};

export default ScreenSelector;

/*
*/
