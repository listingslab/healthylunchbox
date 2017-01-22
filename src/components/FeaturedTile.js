/**
 * Created by Chris Dorward on 15/01/2017
 * components/FeaturedTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function FeaturedTile(props) {
  // console.log('________________FeaturedTile(props)');
  // console.log(props);
  // console.log('________________End FeaturedTile(props)');

  let featuredType = 'Feature Type';
  if (props.featuredType !== undefined) {
    featuredType = props.featuredType;
  }

  let link = '/';
  if (props.link !== undefined) {
    link = props.link;
  }
  let title = 'Featured Tile Title';
  if (props.title !== undefined) {
    title = props.title;
  }
  let catLink = link;
  if (props.catLink !== undefined) {
    if (props.catLink !== '') {
      catLink = props.catLink;
    }
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
        <h4><Link
          to={link}
          title="View this content"
          className="featured-tile-link"
        >{title}</Link></h4>
      </div>
      </div>
    </div>
  );
}

FeaturedTile.propTypes = {
  id: PropTypes.string,
  featuredType: PropTypes.string,
  title: PropTypes.string,
  catLink: PropTypes.string,
  shortDescription: PropTypes.string,
  link: PropTypes.string
};

export default FeaturedTile;
/*
<Link
  to={editurl}
  title="Edit this content"
  className="btn btn-default"
>

<span className="glyphicon glyphicon-pencil"></span>
</Link>
*/
