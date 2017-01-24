/**
 * Created by Chris Dorward on 22/01/2017
 * templates/ItemRecipe
 * represents a ItemRecipe
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SingleHeader from '../../components/SingleHeader/SingleHeader';
import RecipeData from './RecipeData_550';

import './ItemRecipe.scss';

class ItemRecipe extends Component {

  static propTypes = {
  }

  createMarkup(plain) {
    console.log(this);
    return { __html: plain };
  }

  render() {
    const ItemData = RecipeData;

    // const pathName = this.props.location.pathname;
    console.log(ItemData);
    const header = ItemData.title.rendered;
    const shortDescription = ItemData.acf.short_description;

    return (
      <div className="recipe-item container">
        <SingleHeader
          ID={this.props.location.query.ID || 0}
          itemType="recipe"
          header={header}
          shortDescription={shortDescription}
        />

        <div className="col-md-4">
          <img className="img-responsive" src={ItemData.acf.image.sizes.large} alt={header} />
        </div>

        <div className="col-md-3">
          <h3>Ingredients</h3>
          <div dangerouslySetInnerHTML={this.createMarkup(ItemData.acf.ingredients)} />
        </div>

        <div className="col-md-5">
          <h3>Method</h3>
          <div dangerouslySetInnerHTML={this.createMarkup(ItemData.acf.method)} />
        </div>

      </div>
    );
  }
}

export default connect()(ItemRecipe);

/*

<Link
  href={ItemData.link}
  title="Accessible Version"
  className="btn btn-default"
  ><span className="glyphicon glyphicon-heart"></span></Link>

<div className="alert alert-warning" role="alert">
  <strong>Warning!</strong> Best check yo self.
</div>

*/
