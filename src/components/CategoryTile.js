/**
 * Created by Chris Dorward on 15/01/2017
 * components/CategoryTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CategoryTile(props) {
  const title = 'Category Tile Title';
  const thumbnail = '/img/daffs/blue.png';
  const shortDescription = 'Category tile short description';
  // console.log(props);
  // const editurl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${id}&action=edit`;
  const editurl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=0&action=edit';
  return (
    <div className="tile-category">
      <div className="col-md-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={editurl}
          className="category-tile-link"
        >
        <div className="well category-tile">
        <img className="pull-right" alt={title} src={thumbnail} />
        <h3>{title}</h3>
        <p>{shortDescription}</p>
      </div>
    </Link>
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
