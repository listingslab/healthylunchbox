/**
 * Created by Chris Dorward on 24/01/2017
 * components/Loader/Loader
 */

import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

import './Loader.scss';

function Loader(props) {
  const text = props.text || 'default';
  return (
    <div className="loader container row text-center">
      <img
        height="75"
        className="loader-graphic"
        alt="loading"
        src="/img/loader.gif"
      />
      <div className="loader-text">
        <small><strong>{text}</strong></small>
      </div>
    </div>
  );
}

Loader.propTypes = {
  text: PropTypes.string.isRequired
};

export default Loader;

/*
*/
