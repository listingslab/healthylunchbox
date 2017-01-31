/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Recipes/Recipes
 */

import React, { Component, PropTypes } from 'react';
import EditLink from '../../components/EditLink/EditLink';
import AddLink from '../../components/AddLink/AddLink';
import CardCategory from '../../components/CardCategory/CardCategory';
import API from '../../API';
import './Recipes.scss';

class Recipes extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      taxonomy: 'recipes'
    };
  }

  componentDidMount() {
    if (cms.Recipes === undefined) {
      const api = new API(this.state.taxonomy);
      api.getDataIfNeeded(`categories/${this.state.taxonomy}`, this.apiCallback.bind(this));
    } else {
      this.reRender();
    }
  }

  reRender() {
    this.setState({
      isLoaded: true
    });
  }

  makeMarkup(){
    return { __html: cms.app.data.recipe.post.post_content };
  }

  apiCallback(cmsData) {
    cms.Recipes = cmsData;
    this.setState({
      isLoaded: true
    });
  }

  render() {
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={cms.app.data.recipe.editUrl || ''}
        />
      );
    }
    console.log(cms.app.data.recipe);
    return (
      <div className="container categories">
        {editBtn}
        <h1>{cms.app.data.recipe.post.post_title || ''}</h1>
        <div dangerouslySetInnerHTML={this.makeMarkup()} />
        <div className="row">
          <img src="/img/bg_CardCategory.jpg" className="img-responsive" alt="none" />
        </div>
      </div>
    );
  }
}

export default Recipes;
