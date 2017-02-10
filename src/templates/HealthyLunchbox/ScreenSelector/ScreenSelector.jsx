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
  console.log(props);
  const foodgroups = cms.app.data.lunchbox.foodgroups;
  let foodgroupData = null;
  for (let i = 0; i < foodgroups.length; i += 1) {
    if (props.foodgroup === foodgroups[i].cat.slug) {
      foodgroupData = foodgroups[i];
      break;
    }
  }
  console.log(foodgroupData);
  return (
    <div id="screen-selector" className="">
      screen-selector
    </div>
  );
}

ScreenSelector.propTypes = {
  foodgroup: PropTypes.string.isRequired
};

export default ScreenSelector;

/*
*/
