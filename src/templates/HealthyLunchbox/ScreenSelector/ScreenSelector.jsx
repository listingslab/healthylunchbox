/* global cms */
/* global editor */
/**
 * Created by Chris Dorward on 05/02/2017
 * components/ScreenSelector/ScreenSelector
 */

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import EditLink from '../../../components/EditLink/EditLink';

function ScreenSelector(props) {
  const fgs = cms.app.data.lunchbox.foodgroups;
  let foodgroupData = null;
  for (let i = 0; i < fgs.length; i += 1) {
    if (props.foodgroup === fgs[i].cat.slug) {
      foodgroupData = fgs[i];
    }
  }
  const title = foodgroupData.cat.name.replace('&amp;', '&');

  let editBtn = null;
  const editURL = `http://api.healthylunchbox.com.au/wp-admin/term.php?taxonomy=lunchbox&tag_ID=${foodgroupData.cat.term_id}`;
  if (editor) {
    editBtn = (
      <EditLink
        editUrl={editURL || ''}
      />
    );
  }

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
          <img
            alt="HLB"
            src={foodgroupData.image || '/img/builder/green-carrot.png'}
            className={'img-responsive builder-screen-2-header-img'}
          />
        </div>

        <div className="col-xs-4 col-sm-4 builder-screen-2-header-title">
          <h2>{title || ''}</h2>
        </div>
        <div className="col-xs-6 col-sm-5 builder-screen-2-header-text">
          <p>{foodgroupData.cat.description || ''}</p>
          {editBtn}
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
*/
