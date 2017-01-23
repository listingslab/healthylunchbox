/**
 * Created by Chris Dorward on 18/01/2017
 * components/SingleHeader
 */

import React, { PropTypes } from 'react';
import './SingleHeader.scss';

function SingleHeader(props) {
  const className = `single-header jumbotron single-header-${props.itemType}`;
  return (
    <div className={className}>
    <div className="container">
      <h2>
        {props.header || ''}
      </h2>
      <p>{props.shortDescription || ''}</p>
    </div>
  </div>
  );
}

SingleHeader.propTypes = {
  header: PropTypes.string,
  itemType: PropTypes.string,
  shortDescription: PropTypes.string
};

export default SingleHeader;
