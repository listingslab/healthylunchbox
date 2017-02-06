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
  console.log('ScreenSelector Render');
  console.log(cms.builder);
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

  const toggeleMore = () => {
    if ($('#more_screen').hasClass('hidden')) {
      $('#more_screen').removeClass('hidden');
      $('#more_btn').addClass('hidden');
      $('#less_btn').removeClass('hidden');
    } else {
      $('#more_screen').addClass('hidden');
      $('#more_btn').removeClass('hidden');
      $('#less_btn').addClass('hidden');
    }
  };

  const selectItem = (itemObj) => {
    if (props.foodgroup === 'fruit') {
      cms.builder.fruit= itemObj;
    }
    if (props.foodgroup === 'dairy') {
      cms.builder.dairy = itemObj;
    }
    if (props.foodgroup === 'meat-alternatives') {
      cms.builder.meat = itemObj
    }
    if (props.foodgroup === 'vegetables-salads') {
      cms.builder.salad = itemObj;
    }
    if (props.foodgroup === 'water') {
      cms.builder.water = itemObj;
    }
    if (props.foodgroup === 'breads-cereals') {
      cms.builder.cereals = itemObj
    }
    if (props.foodgroup === 'breads-cereals') {
      cms.builder.cereals = itemObj;
    }
    browserHistory.push('/healthy-lunch-box');
  };

  const items = [];

  for (let i = 0; i < foodgroupData.items.length; i += 1) {
    const ID = foodgroupData.items[i].ID || 0;
    const item = foodgroupData.items[i] || {};
    // const slug = foodgroupData.items[i].post.post_name || '';
    const image = foodgroupData.items[i].acf.image.url || '/img/builder/green-carrot_top.png';
    const cardTitle = foodgroupData.items[i].post.post_title || 'Lunchbox item';
    const further = foodgroupData.items[i].acf.image.further_information || '';
    const key = `lb-item_${i}`;
    let editBtn = null;
    const editURL = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${ID}&action=edit`;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={editURL || ''}
        />
      );
    }
    items.push(
      <div
        key={key}
        className="col-lg-4 col-md-4 col-sm-4 col-xs-6 item-card"
      >
        <div className="builder-2-card">
          <img
            onClick={() => selectItem(item)}
            alt={cardTitle}
            src={image}
            className="img-responsive builder-screen-2-card-img"
          />
          <div className="builder-2-card-text">
            <h4>{cardTitle}</h4>
          </div>
          {editBtn}
        </div>
      </div>
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
      <div className="row">
        <div className="col-xs-12 builder-screen-2-extend">
          <h4
            onClick={() => toggeleMore()}
            id="less_btn"
            className="hidden">Hide serving size information<span className="glyphicon glyphicon-chevron-up btn-lg" aria-hidden="true"></span></h4>
          <h4
            id="more_btn"
            onClick={() => toggeleMore()}
          >Show serving size information<span className="glyphicon glyphicon-chevron-down btn-lg" aria-hidden="true"></span></h4>
        </div>
      </div>

      <div id="more_screen" className="hidden">

        <div className="row">
          <div className="col-xs-12 lunchbox-servings">
            <img
              alt="HLB"
              src="/img/builder/servings.png"
              className="img-responsive"
            />
          </div>
        </div>

        <div id="more" className="row">
          <div className="col-xs-12 lunchbox-more">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis rutrum tellus.
            Cras lobortis sem sit amet sapien tristique, sit amet dignissim libero ornare.
            Vestibulum condimentum, orci nec placerat rhoncus, dui arcu molestie dui, dictum
            pellentesque massa nisl ac massa.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis rutrum tellus.
            Cras lobortis sem sit amet sapien tristique, sit amet dignissim libero ornare.
            Vestibulum condimentum, orci nec placerat rhoncus, dui arcu molestie dui, dictum
            pellentesque massa nisl ac massa.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis rutrum tellus.
            Cras lobortis sem sit amet sapien tristique, sit amet dignissim libero ornare.
            Vestibulum condimentum, orci nec placerat rhoncus, dui arcu molestie dui, dictum
            pellentesque massa nisl ac massa.</p>
          </div>
        </div>

      </div>
    </div>
    <div className="col-md-12 builder-screen-2-cards-title">
      <h4>Select one to pack it!</h4>
    </div>

    <div className="container">
      {items}
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
