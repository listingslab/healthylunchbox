/**
 * Created by Chris Dorward on 23/01/2017
 * components/Hero/Hero
 */

import React from 'react';
import { Link } from 'react-router';

import './Hero.scss';

function Hero(props) {
  // console.log(props.hero);
  return (
    <div className="hero jumbotron">
      <Link
        className="btn btn-default pull-right"
        href={props.editLink}
        role="button"
      ><span className="glyphicon glyphicon-pencil"></span></Link>

    <h2>{ props.hero.hero_title || 'Default Hero Header'}</h2>
    <p>{ props.hero.hero_subtitle || 'Default short description' }</p>
      <Link
        className="btn btn-danger btn-lg"
        to={props.hero.hero_link_url || '/'}
        role="button"
      >
        { props.hero.hero_link_text || 'Click here' }
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
