/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Item/Item
 */

import React, { Component } from 'react';

class Item extends Component {

  static propTypes = {
  }

  createMarkup(htmlText) {
    return { __html: htmlText };
  }

  render() {
    console.log(this.props.routeParams.slug);
    // get details of whatever item this is from cms store
    console.log(cms);
    return (
      <div className="recipe-item container">
        {this.props.routeParams.slug}
      </div>
    );
  }
}

export default Item;

/*
<div dangerouslySetInnerHTML={this.createMarkup('')} />
*/
