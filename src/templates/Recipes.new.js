/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Recipes
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CategoryTile from '../components/CategoryTile';
import Jumbotron from '../components/Jumbotron';

class Recipes extends Component {
  static propTypes = {
    status: PropTypes.string,
    posts: PropTypes.any
  }

  render() {
    if (this.props.posts.status !== 'ok') {
      return (<div className="template-error">
          <div className="container">
            <Link to="/help">API status not OK</Link>
          </div>
        </div>);
    }
    const data = this.props.posts.data;
    const tiles = [];
    for (let i = 0; i < data.length; i += 1) {
      tiles.push(<div
        className="tile-category"
        key={i}>
        <CategoryTile post={data[i]} />
      </div>);
    }

    return (<div className="template-recipes">
        <div className="container">
          <Jumbotron page={this.props} />
          </div>
          <div className="container">
            {tiles}
          </div>
      </div>);
  }
}

export default connect()(Recipes);
