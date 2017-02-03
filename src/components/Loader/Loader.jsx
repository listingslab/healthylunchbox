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
        className="logo-graphic"
        src="/img/logos/HLB_logo-90.png"
        alt="HLB"
      /><br />
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
