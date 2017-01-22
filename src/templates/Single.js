/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Single
 * represents a single item of content
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Jumbotron from '../components/Jumbotron';

class Single extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-single">
        <div className="container">
          <Jumbotron
            header="Title"
            shortDescription="Short Description"
            linkType="accessible"
            linkText="?"
            target="_self"
            url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
            url="/accessible"
          />

        <div className="template-breadcrumb container">
          <Link
            to="/"
          >Home</Link> |
          <Link
            to="/recipes"
          > Categories</Link> |
          <Link
            to="/tags"
          > tags</Link> |
          <Link
            to="/search"
          > search</Link>
        </div>

        <div className="container">

          <h2>Subheading 1</h2>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
              Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
              Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. </p>
            <h3>Subheading 2</h3>


            <img
              src="/img/CCNSW_Logo.png"
              className="pull-right"
              alt="logo"
              />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>


            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
              elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
              sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
              Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
              Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. </p>
        </div>

        </div>
      </div>
    );
  }
}

export default connect()(Single);

/*

<div className="alert alert-warning" role="alert">
  <strong>Warning!</strong> Best check yo self.
</div>

*/
