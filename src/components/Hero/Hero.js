/**
 * Created by Chris Dorward on 23/01/2017
 * components/Hero/Hero
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Hero.scss';

function Hero(props) {
  const className = `hero jumbotron hero-${props.colour}`;
  let editBtn = null;
  if (props.showEdit){
    editBtn = <Link className="btn btn-default pull-right"
      href={props.editUrl || ''}
      role="button"
    ><span className="glyphicon glyphicon-pencil" /></Link>;
  }
  return (
    <div className={className}>
      {editBtn}
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
  colour: PropTypes.string.isRequired,
  showEdit: PropTypes.bool.isRequired,
  editUrl: PropTypes.string
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
