/**
 * Created by Chris Dorward on 24/01/2017
 * components/Loader/Loader
 */

import React from 'react';
import { Link } from 'react-router';

import './Loader.scss';

function Loader(props) {
  return (
    <div className="loader container row text-center">
      <img height="75" alt="loading" src="/img/loader.gif" />
    </div>
  );
}

export default Loader;

/*
*/
