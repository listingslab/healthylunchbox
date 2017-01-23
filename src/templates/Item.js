/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Item
 * represents a Item item of content
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleHeader from '../components/SingleHeader/SingleHeader';
import ContextualMenu from '../components/ContextualMenu';

class Item extends Component {
  static propTypes = {
  }

  render() {
    const pathName = this.props.location.pathname;
    return (
      <div className="template-item container">
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
