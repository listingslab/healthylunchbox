/**
 * Created by Chris Dorward on 15/01/2017
 * components/CategoryTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CategoryTile(props) {
  // console.log(props);
  const editurl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${props.post.ID}&action=edit`;
  return (
    <div className="tile-category">
      <div className="col-md-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={editurl}
          className="category-tile-link"
        >
        <div className="well category-tile">
        <img className="pull-right" alt={props.post.title} src={props.post.thumbnail} />
        <h3>{props.post.title}</h3>
        <p>{props.post.short_description}</p>
      </div>
      </a>
      </div>
    </div>
  );
}

CategoryTile.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

export default CategoryTile;
