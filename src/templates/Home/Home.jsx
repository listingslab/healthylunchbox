/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';
import { Link } from 'react-router';
import EditLink from '../../components/EditLink/EditLink';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    // Get the data from the redux store
    this.reRender();
  }

  componentDidUpdate() {
    // console.log('template/Home  componentDidUpdate');
  }

  reRender() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    // console.log(cms.app.data.home_page.hero.editUrl);
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={cms.app.data.home_page.hero.editUrl}
        />
      );
    }

    const featuredRecipes = [];
    for (let i = 0; i < cms.app.data.home_page.featured_recipes.length; i += 1) {
      const key = `recipe_${i}`;
      featuredRecipes.push(
        <div key={key} className="row margin-top-10">
          <Link
            className="btn btn-success"
            to={`/recipe/${cms.app.data.home_page.featured_recipes[i].itemSlug}`}
          >{cms.app.data.home_page.featured_recipes[i].title}</Link>
        </div>
      );
    }

    const featuredTips = [];
    for (let i = 0; i < cms.app.data.home_page.featured_tips.length; i += 1) {
      const key = `tip_${i}`;
      featuredTips.push(
        <div key={key} className="row margin-top-10">
          <Link
            className="btn btn-warning"
            to={`/recipe/${cms.app.data.home_page.featured_tips[i].itemSlug}`}
          >{cms.app.data.home_page.featured_tips[i].title}</Link>
        </div>
      );
    }

    return (
      <div className="home">
        <div className="container raised-page">
          {editBtn}
          <h1>{cms.app.data.home_page.hero.data.heroTitle}</h1>
          <p>{cms.app.data.home_page.hero.data.heroSubTitle}</p>
          <Link
            className="btn btn-info"
            to={cms.app.data.home_page.hero.data.linkUrl}
          >
          {cms.app.data.home_page.hero.data.linkText}</Link>
        </div>

        <div className="container raised-page margin-top-25">

          <div className="container col-md-6 margin-top-25">
            <h3>Featured recipes</h3>
            <div className="container">
              <div className="row margin-top-10">
                <Link
                  className=""
                  to="/recipes"
                >Recipes page</Link>
              </div>
              {featuredRecipes}
            </div>
          </div>

          <div className="container col-md-6 margin-top-25">
            <h3>Featured tips</h3>
              <div className="container">
                <div className="row margin-top-10">
                  <Link
                    className=""
                    to="/tips"
                  >Tips page</Link>
                </div>
                {featuredTips}
              </div>
          </div>

        </div>

        <div className="container raised-page margin-top-25">
          <h3>Featured Category</h3>
          <div className="container col-md-6">
            <div className="container">
              <div className="row margin-top-10">
                <Link
                  className="btn btn-success"
                  to="/recipes/packed-lunches"
                >Packed Lunches</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

/*
<div className="row">
  {featuredItems}
</div>
*/
