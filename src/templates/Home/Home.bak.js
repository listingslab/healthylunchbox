/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../../actions';
import Loader from '../../components/Loader/Loader';
import Hero from '../../components/Hero/Hero';
// import FeaturedTile from '../../components/FeaturedTile/FeaturedTile';
import ContextualMenu from '../../components/ContextualMenu/ContextualMenu';

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
    //console.log('rendering Home Page');
    console.log(this.props.posts.data);
    // const { children } = this.props;
    return (
      <div className="home container">
        <Hero />
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
