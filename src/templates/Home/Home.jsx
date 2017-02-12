/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import verge from 'verge';
import EditLink from '../../components/EditLink/EditLink';
import CardRecipeItem from '../../components/CardRecipeItem/CardRecipeItem';
import CardCategory from '../../components/CardCategory/CardCategory';
import './Home.scss';

class Home extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  hideBreadbrumb() {
    $('#hlbBreadcrumb').hide();
  }

  showBreadbrumb() {
    $('#hlbBreadcrumb').show();
  }

  render() {
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={cms.app.data.home_page.hero.editUrl || ''}
        />
      );
    }
    const featuredRecipes = [];
    const fr = cms.app.data.home_page.featured_recipes || [];
    for (let i = 0; i < fr.length; i += 1) {
      const key = `recipe_${i}`;
      featuredRecipes.push(
        <div key={key} className="col-md-4 col-sm-6">
          <CardRecipeItem
            route={`/recipe/${fr[i].itemSlug}`}
            title={fr[i].title || ''}
            subTitle={fr[i].subTitle || ''}
            freezable={fr[i].freezable || false}
            preparation_time={fr[i].preparation_time || ''}
            veg_serves={fr[i].veg_serves || ''}
            cooking_time={fr[i].cooking_time || ''}
            tabText="Freezable"
            itemType="recipe"
            image={fr[i].image}
            icon="freezable"
          />
        </div>
      );
    }

    const ft = cms.app.data.home_page.featured_tips || [];
    const quickTips = [];

    for (let i = 0; i < 2; i += 1) {
      const item = cms.app.data.home_page.featured_tips[i];
      const tipLink = `/tip/${item.itemSlug}`;
      const key = `tip_${i}`;
      quickTips.push(
        <div
          key={key}
          className="quicktip"
        >
          <h3>{item.home_tip_text}</h3>
          <Link
            to={tipLink}
          >More like this.</Link>
        </div>
      );
    }
    let featuredCatData = null;
    const featuredCat = 'packed-lunches';
    for (let i = 0; i < cms.app.data.recipes.categories.length; i += 1) {
      if (featuredCat === cms.app.data.recipes.categories[i].slug) {
        featuredCatData = cms.app.data.recipes.categories[i];
      }
    }
    return (
      <div className="home container">
        <div className="home-hero">
          <div className="row">
            <div className="col-md-6" >
              <img
                alt="Healthy Lunch Box"
                className="img-responsive"
                src="/img/hero.png"
              />
            </div>

            <div className="col-md-6 pad_25" >
              <h1>{cms.app.data.home_page.hero.data.heroTitle || ''}</h1>
              <h3>{cms.app.data.home_page.hero.data.heroSubTitle || ''}</h3>
              <Link
                to={cms.app.data.home_page.hero.data.linkUrl || '/'}
                className="btn btn-warning btn-lg"
              >{cms.app.data.home_page.hero.data.linkText || 'Click'}</Link>
            </div>
          </div>
        </div>

        <div className="home-featured-recipes">
          <div className="row pull-right">
            <Link
              to="/recipes"
              className="pull-right hlb-page-btn"
            ><h4>{cms.app.data.home_page.hero.data.more_recipes_text || 'More recipes & ideas'}</h4></Link>
          </div>
          <div className="row margin-bottom-25">
            <h3>{cms.app.data.home_page.hero.data.featured_recipes_heading || 'Featured lunchbox recipes'}</h3>
            </div>
            <div className="row">
              {featuredRecipes}
            </div>
          </div>

          <div className="home-bottom">
            <div className="row">
                <div className="col-md-6 home-quicktip">
                  <h2>{cms.app.data.home_page.hero.data.quick_tips_title || 'Quick Tips'}</h2>
                  {quickTips}
                </div>

              <div className="col-md-6 pad_25" >
                <CardCategory
                  route={featuredCatData.route}
                  title={featuredCatData.title}
                  subTitle={featuredCatData.subTitle}
                  numberItems={featuredCatData.items.length}
                  itemType="recipe"
                  colour="orange"
                  image={featuredCatData.image}
                  countText="Examples"
                />
              </div>

            </div>
          </div>
          {editBtn}
      </div>
    );
  }
}

export default Home;

/*

<h1>{cms.app.data.home_page.hero.data.heroTitle || ''}</h1>
<h2>{cms.app.data.home_page.hero.data.heroSubTitle || ''}</h2>

<div className="margin-top-10 col-md-4">
  {featuredRecipes}
</div>

<div className="margin-top-25 col-md-8">

</div>
*/
