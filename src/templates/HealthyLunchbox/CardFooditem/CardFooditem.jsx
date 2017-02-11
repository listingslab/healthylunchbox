/* global cms */
/* global editor */
/**
 * Created by Chris Dorward on 11/02/2017
 * components/CardFooditem/CardFooditem
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CardFooditem(props) {
  const editUrl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${props.itemData.post.ID}&action=edit`;
  const itemClicked = () => {
    browserHistory.push('/healthy-lunch-box/');
  };
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
      <div className="builder-2-card">
        <img
          alt={props.itemData.post.post_title || ''}
          src={props.itemData.acf.image || '/img/builder/green-carrot.png'}
          className="img-responsive builder-screen-2-card-img"
        />
        <div className="builder-2-card-text">
          <h4><a href={editUrl} target="_blank">{props.itemData.post.post_title || ''}</a></h4>
          <p>{props.itemData.acf.card_sub_text || ''}</p>
        </div>
      </div>
    </div>
  );
}

CardFooditem.propTypes = {
  itemData: PropTypes.any.isRequired
};

export default CardFooditem;
