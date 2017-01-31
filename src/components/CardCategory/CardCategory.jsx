/* global editor */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/CardCategory/CardCategory
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './CardCategory.scss';

function CardCategory(props) {
  let className = '';
  if (props.displayType === 'featured') {
    className = 'card-category col-md-12';
  } else {
    className = 'card-category col-md-6';
  }
  return (
    <Link
      to={props.route || ''}
    >
      <div className={className}>
        <div className="card-center-overlay-text">
          <h2>{props.title || ''}</h2>
          <p>{props.subTitle || ''}</p>
        </div>
      </div>
    </Link>
  );
}

CardCategory.propTypes = {
  route: PropTypes.string.isRequired,
  displayType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default CardCategory;

/*
<img src="/img/bg_CardCategory.jpg" className="img-responsive" alt={props.title || ''} />
<div className="card-color-overlay"></div>
  <div className="card-center-overlay">

  </div>
*/
