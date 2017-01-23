/**
 * Created by Chris Dorward on 23/01/2017
 * components/Hero
 */

import React from 'react';
import { Link } from 'react-router';

import './Hero.scss';

function Hero(props) {
  return (
    <div className="hero jumbotron">
      <h2>{props.header || 'Default Hero Header'}</h2>
      <p>{ props.shortDescription || 'lorem ispum' }</p>
        <Link
          className="btn btn-danger btn-lg"
          to={props.link || '/'}
          role="button"
        >
          { props.linkText || 'Click here' }
        </Link>
    </div>
  );
}

export default Hero;

/*

  to={{
    pathname: '/item',
    query: {
      itemID: '123'
    }
  }}

  <Link
    className="btn btn-default btn-lg"
    to={props.url || defaults.url}
    role="button">
    {props.linkText || defaults.linkText}
  </Link>
*/
