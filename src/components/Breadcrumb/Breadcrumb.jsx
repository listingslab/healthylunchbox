/**
 * Created by Chris Dorward on 31/01/2017
 * components/Breadcrumb/Breadcrumb
 */

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import './Breadcrumb.scss';

function Breadcrumb(props) {
  // console.log('Breadcrumb props');
  // console.log(props);

  return (
    <div id="hlbBreadcrumb" className="hlb-breadcrumb container">

        <Link className=""
          to={'/'}
          title="Home"
      ><span className="glyphicon glyphicon-home" /></Link>

    &nbsp;&nbsp;<span className="yellow-text">&lt;</span>&nbsp;&nbsp;

        <Link
          className=""
          to={''}
          onClick={browserHistory.goBack}
          title="Back"
        >Back</Link>

    </div>
  );
}

Breadcrumb.propTypes = {
  editUrl: PropTypes.string
};

export default Breadcrumb;
