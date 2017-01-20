/**
 * Created by Chris Dorward on 16/01/2017
 * components/Posts
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
  posts: PropTypes.array.isRequired
};

export default Posts;
