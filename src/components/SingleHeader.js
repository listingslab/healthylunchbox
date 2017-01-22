/**
 * Created by Chris Dorward on 18/01/2017
 * components/SingleHeader
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function SingleHeader(props) {
  // console.log(props);
  const defaults = {
    header: 'Categories Header',
    url: '/',
    url_accessible: 'http://api.healthylunchbox.com.au/home/about/',
    linkType: 'internal',
    target: '_self',
    linkText: 'Cilck me',
    shortDescription: 'none'
  };
  return (
    <div className="template-jumbotron jumbotron">
    <div className="container">
      <h2>
        {props.header || defaults.header}
      </h2>
      <p>{props.shortDescription || defaults.shortDescription}</p>
    </div>
  </div>
  );
}

SingleHeader.propTypes = {
  url: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired
};

export default SingleHeader;
