/**
 * Created by Chris Dorward on 15/01/2017
 * components/FeaturedTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function FeaturedTile(props) {
  // console.log('________________FeaturedTile(props)');
  console.log(props);
  // console.log('________________End FeaturedTile(props)');

  let featuredType = 'Feature Type';
  if (props.featuredType !== undefined) {
    featuredType = props.featuredType;
  }

  let title = 'Featured Tile Title';
  if (props.title !== undefined) {
    title = props.title;
  }
  let thumbnail = '/daffs/.png';
  if (props.thumbnail !== undefined) {
    thumbnail = props.thumbnail;
  }
  let shortDescription = 'Featured tile short description';
  if (props.shortDescription !== undefined) {
    shortDescription = props.shortDescription;
  }
  const editurl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${props.id}&action=edit`;
  // const editurl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=0&action=edit';
  return (
    <div className="tile-category">
      <div className="col-md-6">
        <div className="well">
<img className="pull-right" alt={title} src={thumbnail} />
        <h3>Featured {featuredType}</h3>
        <h4>{title}</h4>

        <p>{shortDescription}</p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={editurl}
            className="template-tile-link btn btn-success"
          >Edit
        </Link>
      </div>
      </div>
    </div>
  );
}

FeaturedTile.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  shortDescription: PropTypes.string,
  link: PropTypes.string
};

export default FeaturedTile;
/*

*/
