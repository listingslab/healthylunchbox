/**
 * Created by Chris Dorward on 18/01/2017
 * components/CategoriesHeader
 */

import React from 'react';
import { Link } from 'react-router';

function CategoriesHeader(props) {
  console.log(props);
  const defaults = {
    header: 'CategoriesHeader',
    url: '/categories',
    url_accessible: 'http://api.healthylunchbox.com.au/home/about/',
    linkType: 'internal',
    target: '_self',
    linkText: 'Cilck me',
    shortDescription: ''
  };
  return (
    <div className="template-jumbotron jumbotron">
    <div className="container">
      <h2>{props.header || defaults.header}</h2>
      <p>{props.shortDescription || defaults.shortDescription}</p>
    </div>
  </div>
  );
}

export default CategoriesHeader;
