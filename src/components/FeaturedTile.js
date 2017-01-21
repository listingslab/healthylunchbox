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
        <h3>Featured {featuredType}</h3>
        <h4>{title}</h4>

        <p>{shortDescription}</p>

        <Link
          to={link}
          className="btn btn-primary"
        >Item &raquo;</Link>
        &nbsp;

        <Link
          to={catLink}
          className="btn btn-primary"
        >Category &raquo;</Link>
        &nbsp;

        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={editurl}
          className="btn btn-default"
        >Edit</Link>

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

*/
