/**
 * Created by Chris Dorward on 18/01/2017
 * components/Jumbotron
 */

import React from 'react';
import { Link } from 'react-router';

function Jumbotron(props) {
  console.log(props);
  return (
    <div className="template-jumbotron jumbotron">
    <div className="container">
      <h1>Use the lunchbox builder</h1>
      <p>It&apos;s fun for the whole family and can be used in the kitchen on your ipad.</p>
      <p><Link className="btn btn-primary btn-lg" to="/builder" role="button">Use it, use it &raquo;</Link></p>
    </div>
  </div>
  );
}

Jumbotron.propTypes = {
};

export default Jumbotron;
