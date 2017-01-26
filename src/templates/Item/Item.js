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
        <Header
          ID={''}
          itemType={''}
          header={''}
          shortDescription={''}
        />

        <div className="col-md-4">
          <img className="img-responsive" src={''} alt={''} />
        </div>

        <div className="col-md-3">
          <h3>Ingredients</h3>
          <div dangerouslySetInnerHTML={this.createMarkup('')} />
        </div>

        <div className="col-md-5">
          <h3>Method</h3>
          <div dangerouslySetInnerHTML={this.createMarkup('')} />
        </div>

      </div>
    );
  }
}

export default Item;
