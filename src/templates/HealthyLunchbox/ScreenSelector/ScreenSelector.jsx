/* global cms */
/* global editor */
/**
 * Created by Chris Dorward on 05/02/2017
 * components/ScreenSelector/ScreenSelector
 */

import React, { PropTypes } from 'react';
// import { Link, browserHistory } from 'react-router';
// import $ from 'jquery';
// import EditLink from '../../../components/EditLink/EditLink';

function ScreenSelector(props) {
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
  return (
    <div id="screen-selector" className="container">
      <div className="row">
        <div className={headerClass}>
        {props.foodgroup}
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
*/
