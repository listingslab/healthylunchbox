/**
 * Created by Chris Dorward on 16/01/2017
 * templates/NotFound
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class NotFound extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-jumbotron jumbotron">
      <div className="container">
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
    </div>
    );
  }
}

export default connect()(NotFound);

/*
<h3>Perhaps searching would help?</h3>
<form name="search">
  <input type="text" name="searchterm" />
  <input type="submit" value="Search" />
</form>

*/
