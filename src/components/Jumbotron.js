/**
 * Created by Chris Dorward on 18/01/2017
 * components/Jumbotron
 */

import React from 'react';
import { Link } from 'react-router';

function Jumbotron() {
  // Jumbotron(props) console.log(props);
  return (
      <div className="template-jumbotron container">
        <div className="jumbotron">
          <h2>Lunchbox builder hero box</h2>
          <p className="lead">This is where we put a big advert for the builder and include its value proposition</p>
        <p><Link className="btn btn-lg btn-success" to="/builder">Hide</Link></p>
        </div>
      </div>
  );
}

Jumbotron.propTypes = {
};

export default Jumbotron;
