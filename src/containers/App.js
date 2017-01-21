/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectHLB, fetchPostsIfNeeded, invalidateHLB } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class App extends Component {
  static propTypes = {
    selectedHLB: PropTypes.string.isRequired,
    posts: PropTypes.any.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedHLB } = this.props;
    dispatch(fetchPostsIfNeeded(selectedHLB));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedHLB !== this.props.selectedHLB) {
      const { dispatch, selectedHLB } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedHLB));
    }
  }

  handleChange = (nextHLB) => {
    this.props.dispatch(selectHLB(nextHLB));
  }

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { dispatch, selectedHLB } = this.props;
    dispatch(invalidateHLB(selectedHLB));
    dispatch(fetchPostsIfNeeded(selectedHLB));
  }

  render() {
    const { selectedHLB, posts, isFetching, lastUpdated } = this.props;
    const isEmpty = posts.length === 0;
    const { children } = this.props;
    return (
      <div className="template-app">
        <Header />
        <div className="container">
          {children}
        </div>
        <Footer />
        <hr />
        <div className="template-picker">
          <Picker value={selectedHLB}
            onChange={this.handleChange}
            options={['recipes', 'tips']} />

            {lastUpdated &&
              <div className="container">
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </div>
            }
            {!isFetching &&
              <div className="container">
              <button href="#"
                onClick={this.handleRefreshClick}>
                Refresh
              </button>
            </div>
            }

          {isEmpty
            ? (isFetching ? <div className="container"><p>Loading...</p></div> : <div className="container"><p>Empty.</p></div>)
            : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Posts posts={posts} />
              </div>
          }
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

export default connect(mapStateToProps)(App);


/*
<Jumbotron />
*/
