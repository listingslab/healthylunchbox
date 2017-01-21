/**
 * Created by Chris Dorward on 15/01/2017
 * components/TheLunchbox
 */

import React from 'react';
import { Link } from 'react-router';
import './TheLunchbox.scss';

function TheLunchbox() {
  const lunchboxButton = 'builder';
  return (
    <div className="container lunchbox">
      <div className="centered text-center">
        <Link
          to={lunchboxButton}
          className=""
          >
          <img className="img-responsive" src="/img/lunchbox.png" alt="lunchbox" />
        </Link>
      </div>
    </div>
  );
}

TheLunchbox.propTypes = {
};

export default TheLunchbox;

/*
<div className="lunchbox container">The Lunchbox </div>

<div className="lunchbox well container-table">
  <div className="row vertical-center-row">
    <div className="text-center col-md-4 col-md-offset-4">TEXT</div>
  </div>
</div>
*/
