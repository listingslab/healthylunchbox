/**
 * Created by Chris Dorward on 22/01/2017
 * templates/TipItem
 * represents a Tip item
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleHeader from '../../components/SingleHeader/SingleHeader';

import './TipItem.scss';

class TipItem extends Component {

  static propTypes = {
  }

  render() {
    // const pathName = this.props.location.pathname;
    console.log(this.props.location.query.ID);
    return (
      <div className="recipe-item container">
        <SingleHeader
          ID={this.props.location.query.ID || 0}
          itemType="tip"
          header="Single Tip"
          shortDescription="This page is a template for showing a single recipe."
        />

      <h3>Tip</h3>

            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
              Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
              Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. </p>
            <h4>Subheading 2</h4>

            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
              Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
              Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
              Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. </p>

      </div>
    );
  }
}

export default connect()(TipItem);

/*

<div className="alert alert-warning" role="alert">
  <strong>Warning!</strong> Best check yo self.
</div>

*/
