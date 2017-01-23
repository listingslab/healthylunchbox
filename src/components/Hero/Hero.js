/**
 * Created by Chris Dorward on 23/01/2017
 * components/Hero
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';

import './Hero.scss';

function Hero(props) {
  // console.log(props);
  const defaults = {
    header: 'Jumbotron Header',
    url: '/some/jumbotron/path',
    url_accessible: 'http://api.healthylunchbox.com.au/home/about/',
    target: '_self',
    linkText: 'CLICK ME',
    shortDescription: 'lorem ispum'
  };

  return (
    <div className="hero jumbotron">
    <div className="container">
      <h2>{props.header || defaults.header}</h2>
      <p>{props.shortDescription || defaults.shortDescription}</p>
        <Link
          className="btn btn-success btn-lg"
          to={props.url || defaults.url}
          role="button"
        >
          {props.linkText || defaults.linkText}
        </Link>
    </div>
  </div>
  );
}

export default Hero;

/*
  <Link
    className="btn btn-default btn-lg"
    to={props.url || defaults.url}
    role="button">
    {props.linkText || defaults.linkText}
  </Link>
*/
