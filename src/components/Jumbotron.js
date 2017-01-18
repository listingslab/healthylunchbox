/**
 * Created by Chris Dorward on 18/01/2017
 * container/Jumbotron
 */

import React from 'react';
import { Link } from 'react-router';

function Jumbotron(props) {
  console.log(props);
  return (
    <div className="jumbotron">
      <div className="container">
        <h1>{ props.jumbotronTitle }</h1>
        <p>This is a template for a simple marketing or informational website.
        It includes a large callout called a jumbotron and three supporting pieces of content.
        Use it as a starting point to create something more unique.</p>
      <p><Link to="/featured" className="btn btn-warning btn-lg" role="button">View Featured &raquo;</Link></p>
      </div>
    </div>
  );
}

Jumbotron.propTypes = {
};

export default Jumbotron;
