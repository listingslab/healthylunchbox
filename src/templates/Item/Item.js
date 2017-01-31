/**
 * Created by Chris Dorward on 22/01/2017
 * templates/Item/Item
 */

import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class Item extends Component {

  static propTypes = {
  }

  createMarkup(htmlText) {
    return { __html: htmlText };
  }

  render() {
    return (
      <div className="recipe-item container">
        item
      </div>
    );
  }
}

export default Item;

/*
<div dangerouslySetInnerHTML={this.createMarkup('')} />
*/
