/* global editor */
/**
 * Created by Chris Dorward on 31/01/2017
 * components/CardText/CardText
 */

 //packed_lunch_card_title

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './CardText.scss';

function CardText(props) {
  let title = 'H3 title';
  let text = 'Item text';
  if (props.cardData.post_type) {
    title = cms.app.data.special.data.packed_lunch_card_title || '';
    text = props.cardData.acf.whats_inside_list || '';
  }
  const textMarkup = { __html: text };
  return (
    <div className="card-img-text-item">
      <img
        className="card-img-text-img img-responsive"
        alt={title}
        src={props.cardData.acf.image.url || '/img/defaults/CardText.jpg'}
      />
      <div className="card-img-text-content">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={textMarkup} />
      </div>
    </div>
  );
}

CardText.propTypes = {
  cardData: PropTypes.any.isRequired
};

export default CardText;

/*
let decodedSubTitle = props.subTitle.replace('&amp;', '&');
decodedSubTitle = props.subTitle.replace('&#039;', '\'');
*/
