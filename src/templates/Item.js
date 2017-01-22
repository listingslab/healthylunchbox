/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Item
 * represents a Item item of content
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleHeader from '../components/SingleHeader';
import ContextualMenu from '../components/ContextualMenu';

class Item extends Component {
  static propTypes = {
  }

  render() {
    const pathName = this.props.location.pathname;
    return (
      <div className="template-item container">

        <ContextualMenu
          categories="cats"
          back=""
        />

          <SingleHeader
            header="Single item"
            shortDescription="This page is a template for shoing a single item of content."
            url="/back"
            linkType="internal"
            url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
          />


        <h3>Subheading 1</h3>
            <img
              src="/img/CCNSW_Logo.png"
              className="pull-right"
              alt="logo"
              />
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
              Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
              Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. </p>
            <h4>Subheading 2</h4>

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
    );
  }
}

export default connect()(Item);

/*

<div className="alert alert-warning" role="alert">
  <strong>Warning!</strong> Best check yo self.
</div>

*/
