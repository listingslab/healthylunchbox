/* global editor */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/CardCategory/CardCategory
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import EditLink from '../../components/EditLink/EditLink';

import './CardCategory.scss';

function CardCategory(props) {
  let editBtn = null;
  if (editor) {
    editBtn = (
      <div>
        <EditLink
          editUrl={props.editUrl || ''}
        />
      </div>
    );
  }

  return (
    <Link
      to={props.route || ''}
    >
    <div className="card-category">
        <img src="/img/bg_CardCategory.jpg" className="img-responsive" alt="" />
        <div className="card-color-overlay" />
        <div className="card-center-overlay">
          <div className="card-center-overlay-text">
            <h2>{props.title || ''}</h2>
            <p>{props.subTitle || ''}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

CardCategory.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  numberItems: PropTypes.number
};

export default CardCategory;
