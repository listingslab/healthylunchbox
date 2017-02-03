/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import EditLink from '../../components/EditLink/EditLink';
import CardRecipeItem from '../../components/CardRecipeItem/CardRecipeItem';
import CardCategory from '../../components/CardCategory/CardCategory';

class Home extends Component {

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
    // fr.length
    for (let i = 0; i < 1; i += 1) {
      const key = `recipe_${i}`;
      featuredRecipes.push(
        <div key={key} className="row margin-top-10">
          <CardRecipeItem
            route={`/recipe/${fr[i].itemSlug}`}
            title={fr[i].title}
            subTitle={fr[i].subTitle}
            tabText="Featured Recipe"
            itemType="recipe"
            image={fr[i].image}
            icon="orange"
          />
        </div>
      );
    }
    console.log(cms.app.data.home_page.hero.data.heroTitle);
    return (
      <div className="home container">
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
