/**
 * Created by Chris Dorward on 16/01/2017
 * container/NotFound
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-notfound">
        <h3>Perhaps a search would help?</h3>
        <form name="search">
          <input type="text" name="searchterm" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default connect()(NotFound);
