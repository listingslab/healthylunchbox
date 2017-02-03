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
    const fr = cms.app.data.home_page.featured_recipes || [];
    for (let i = 0; i < fr.length; i += 1) {
      const key = `recipe_${i}`;
      // console.log(fr[i]);
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

    return (
      <div className="home container">
        <div className="row">
          {editBtn}
          <h1>{cms.app.data.home_page.hero.data.heroTitle}</h1>
          <p>{cms.app.data.home_page.hero.data.heroSubTitle}</p>
          <Link
            className="btn btn-info"
            to={cms.app.data.home_page.hero.data.linkUrl}
          >
          {cms.app.data.home_page.hero.data.linkText}</Link>
        </div>

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
            colour="green"
            image="http://api.healthylunchbox.com.au/wp-content/uploads/onions.jpg"
          />

          <CardCategory
            route="/tips/grandmas-wisdom"
            title="Grandma's wisdom"
            subTitle="Wisdom is perhaps the scarcest resource in our world today."
            numberItems={4}
            itemType="tip"
            colour="green"
            image="http://api.healthylunchbox.com.au/wp-content/uploads/onions.jpg"
          />

        </div>
      </div>
    );
  }
}

export default Home;
