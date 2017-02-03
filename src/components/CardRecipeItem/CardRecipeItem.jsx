/* global editor */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/CardRecipeItem/CardRecipeItem
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './CardRecipeItem.scss';


function CardRecipeItem(props) {
  const tabText = props.tabText.toUpperCase();
  const image = props.image || '/img/defaults/CardRecipeItem.jpg';
  const icon = `/img/icons/icon-${props.icon}.png` || '/img/icons/icon-green.png'
  return (
    <div className="card-recipe-item">
      <Link
        to={props.route}
      >
        <div className="card-recipe-item-tab-text ">
          <img
            alt={props.title || ''}
            className="card-recipe-img img-responsive"
            src={image}
          />
          <p><span>
          <img
            alt={props.title || ''}
            className="card-recipe-item-icon"
            src={icon}
          /> {tabText || ''}</span></p>
        </div>

        <div className="card-recipe-item-detail">
          <h4>{props.title || ''}</h4>
          <p>{props.subTitle || ''}</p>
        </div>

      </Link>
    </div>
  );
}

CardRecipeItem.propTypes = {
  route: PropTypes.string.isRequired,
  tabText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  itemType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default CardRecipeItem;
