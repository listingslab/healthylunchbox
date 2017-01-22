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
    const pathName = this.props.location.pathname;
    console.log(this.props);
    return (
      <div className="template-">
        <CategoriesHeader
          header={pathName}
          shortDescription="This page is a list of categories of a particular content type."
          url="/categories"
          linkType="internal"
          url_accessible="http://api.healthylunchbox.com.au/an-australian-success-story-the-hpv-vaccine/"
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
