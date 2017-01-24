/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Accessible
 * route: /accessible/xxx
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class Accessible extends Component {
  static propTypes = {
  }
  render() {
    return (
      <div className="template-">
      <div className="container">
        <h2>Accessible is</h2>
        <p>All about making your content avilable to those who want it.</p>
        <p>
          <Link
            className="btn btn-warning"
            to="/accessible/xxx"
            role="button">
            But what does that MEAN?
          </Link>
        </p>
      </div>
    </div>
    );
  }
}

export default connect()(Accessible);

/*
<h3>Perhaps searching would help?</h3>
<form name="search">
  <input type="text" name="searchterm" />
  <input type="submit" value="Search" />
</form>

*/
