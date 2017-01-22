/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Single
 * represents a single item of content
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from '../components/Jumbotron';

class Single extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-single">

      <div className="alert alert-warning" role="alert">
        <strong>Warning!</strong> Best check yo self.
      </div>

        <div className="container">
          <Jumbotron
            header="Single page headline"
            shortDescription="Bit of a tagline or whatever"
            linkType="accessible"
            linkText="Accessible?"
            target="_self"
            url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
            url="/accessible"
          />
        </div>
      </div>
    );
  }
}

export default connect()(Single);

/*
*/
