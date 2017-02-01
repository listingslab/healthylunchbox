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
      <div className="container raised-page margin-top-25">
        <h2>Not Found :(</h2>
        <p>Sorry, your content could not be found. Go home go or back?</p>
          <Link
            className="btn btn-success proximity-btns"
            onClick={browserHistory.goBack}
            >Back</Link>
          <Link
            className="btn btn-success"
            to='/'
            >Home</Link>
      </div>
    );
  }
}

export default NotFound;
