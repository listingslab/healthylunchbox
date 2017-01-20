/**
 * Created by Chris Dorward on 16/01/2017
 * components/Posts
 */
import React from 'react';

function Posts(props) {
  console.log(props);
  return (
    <div className="template-posts">
      <div className="container">
        Show posts in props
      </div>
    </div>
  );
}

export default Posts;

/*
const Posts = (posts) => (
  const returnedjson = JSON.stringify(posts);
  return (
    <div>
      yay got json... {returnedjson}
    </div>
  );

);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
*/
