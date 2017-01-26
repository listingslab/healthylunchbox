/**
 * Created by Chris Dorward on 16/01/2017
 * templates/NotFound//NotFound
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="col-md-12 text-center">
        <h2>Stuff not Found :(</h2>
        <p>
          <Link
            className="btn btn-warning btn-lg"
            to="/"
            role="button">
            &laquo; Back to sqaure one?
          </Link>
        </p>
      </div>
    );
  }
}

export default NotFound;
