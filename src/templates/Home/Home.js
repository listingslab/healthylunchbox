/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../../actions';
import Hero from '../../components/Hero/Hero';
import FeaturedTile from '../../components/FeaturedTile/FeaturedTile';

import './Home.scss';

class Home extends Component {
  static propTypes = {
    posts: PropTypes.any.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded('home'));
  }

  render() {
    // console.log(this.props.posts.data.featured);
    const featuredItemsArr = this.props.posts.data.featured.items;
    const featuredItems = [];
    for (let i = 0; i < featuredItemsArr.length; i += 1) {
      featuredItems.push(<FeaturedTile
        key={`featured_${i}`}
        editLink={featuredItemsArr[i].editLink}
        link="recipe"
        header={featuredItemsArr[i].post_title}
        shortDescription={featuredItemsArr[i].short_description}
        btnType={featuredItemsArr[i].post_type}
      />);
    }

    return (
      <div className="home container">
        <Hero
          editLink={this.props.posts.data.editLink}
          hero={this.props.posts.data.hero}
        />
        <div className="row">
          {featuredItems}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedHLB, postsByHLB } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByHLB[selectedHLB] || {
    isFetching: true,
    items: []
  };

  return {
    selectedHLB,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(Home);

/*
*/
