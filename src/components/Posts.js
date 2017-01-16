/**
 * Created by Chris Dorward on 16/01/2017
 * Posts
 */

import React, { PropTypes } from 'react';

const Posts = ({ posts }) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.shape({
  }).isRequired
};

export default Posts;
