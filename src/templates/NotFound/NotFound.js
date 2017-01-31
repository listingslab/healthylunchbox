/**
 * Created by Chris Dorward on 16/01/2017
 * templates/NotFound//NotFound
 */

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class NotFound extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="col-md-12 text-center">
        <h2>Route not Found :(</h2>
        <p>
          <Link
            className="btn btn-warning btn-lg"
            onClick={browserHistory.goBack}
            >
            &laquo; Back ?
          </Link>
        </p>
      </div>
    );
  }
}

export default NotFound;
