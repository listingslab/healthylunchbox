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

class Home extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.hideBreadbrumb();
  }

  componentWillUnmount() {
    this.showBreadbrumb();
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
    const headerText = 'Lunch box recipes & ideas';
    return (
      <div className="home container">

        <div className="" >
            <div className="page-header">
              <Link
                to="/recipes"
                className="pull-right hlb-page-btn"
              ><h4>{linkText}</h4></Link>
              <h3>{headerText}</h3>
            </div>
            <div className="page-header">
              {featuredRecipes}
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
  <CardCategory
    route="/recipes/packed-lunches"
    title="Packed lunches"
    subTitle="link to category"
    numberItems={3}
    itemType="recipe"
    colour="purple"
    image="http://api.healthylunchbox.com.au/wp-content/uploads/onions.jpg"
  />
</div>
*/
