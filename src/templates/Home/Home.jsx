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
    // console.log(cms.app.data.home_page.hero.data);
    return (
      <div className="home container">
        {editBtn}
        <h1>{cms.app.data.home_page.hero.data.heroTitle}</h1>
        <p>{cms.app.data.home_page.hero.data.heroSubTitle}</p>
        <Link
          className="btn btn-success"
          to={cms.app.data.home_page.hero.data.linkUrl}
        >
        {cms.app.data.home_page.hero.data.linkText}</Link>
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
