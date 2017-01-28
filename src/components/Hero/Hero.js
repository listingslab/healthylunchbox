/**
 * Created by Chris Dorward on 23/01/2017
 * components/Hero/Hero
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Hero.scss';

function Hero(props) {
  const className = `hero jumbotron hero-${props.colour}`
  return (
    <div className={className}>
      <Link
        className="btn btn-default pull-right"
        href={props.editLink}
        role="button"
      ><span className="glyphicon glyphicon-pencil" /></Link>

    <h2>{ props.title|| 'Default Hero Header'}</h2>
    <p>{ props.subTitle || 'Default short description' }</p>
      <Link
        className="btn btn-default btn-lg"
        to={props.url || '/'}
        role="button"
      >
        { props.linkText || 'Click here' }
      </Link>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired
};

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
