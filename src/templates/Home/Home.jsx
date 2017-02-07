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
    // console.log(cms.app.data.home_page.hero.data)
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
    let numToShow = 2;
    if (verge.viewportW() > 1000) {
      // console.log(verge.viewportH());
      numToShow = 3;
    }

    for (let i = 0; i < numToShow; i += 1) {
      const key = `recipe_${i}`;
      // console.log(fr[i].freezable);
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
    // console.log(cms.app.data.home_page.hero.data.heroTitle);
    const linkText = 'More recipes & ideas';
    const headerText = 'Featured lunchbox recipes';
    return (
      <div className="home container">

        <div className="home-hero">
          <div className="row">
            <div className="col-md-6" >
              <img
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
            ><h4>{linkText}</h4></Link>
          </div>
          <div className="row margin-bottom-25">
            <h3>{headerText}</h3>
            </div>
            <div className="row">
              {featuredRecipes}
            </div>
          </div>

          <div className="home-bottom">
            <div className="row">

              <div className="col-md-6" >
                Featured tips
              </div>

              <div className="col-md-6 pad_25" >
                <CardCategory
                  route="/recipes/packed-lunches"
                  title="Packed lunches"
                  subTitle=""
                  numberItems={1}
                  itemType="recipe"
                  colour="purple"
                  image="http://api.healthylunchbox.com.au/wp-content/uploads/eggplant.jpg"
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
