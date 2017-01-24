/**
 * Created by Chris Dorward on 18/01/2017
 * components/Jumbotron
 */

import React from 'react';
import { Link } from 'react-router';

function Jumbotron(props) {
  // console.log(props);
  const defaults = {
    header: 'Jumbotron Header',
    url: '/some/jumbotron/path',
    url_accessible: 'http://api.healthylunchbox.com.au/home/about/',
    linkType: '',
    target: '_self',
    linkText: 'CLICK ME',
    shortDescription: 'lorem ispum'
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

export default Jumbotron;

/*
<p>
  <Link
    className="btn btn-default btn-lg"
    to={props.url || defaults.url}
    role="button">
    {props.linkText || defaults.linkText}
  </Link>
</p>
*/
