/**
 * Created by Chris Dorward on 22/01/2017
 * templates/CategoriesPage
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryTile from '../components/CategoryTile';
import CategoriesHeader from '../components/CategoriesHeader';

class CategoriesPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="template-">
        <CategoriesHeader
          header="Categories Page"
          shortDescription="This page is a list of categories of a particular content type.
          Such as recipes or tips."
          linkType="none"
          linkText="?"
          target="_self"
          url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
          url="/accessible"
        />
        <CategoryTile
          categoryType="recipe"
          title="First"
          link="/"
          />
        <CategoryTile
          title="Cat two"
          categoryType="recipe"
          link="/"
        />
        <CategoryTile
          title="Three"
          categoryType="tip"
          link="/"
        />
        <CategoryTile
          title="Fourx"
          categoryType="tip"
          link="/"
        />
      </div>
    );
  }
}

export default connect()(CategoriesPage);
