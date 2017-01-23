/**
 * Created by Chris Dorward on 15/01/2017
 * components/FeaturedTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './FeaturedTile.scss';

function FeaturedTile(props) {
  // console.log('________________FeaturedTile(props)');
  const className = `well featured-tile featured-tile-${props.btnType}`;
  return (
    <div className="col-md-6">

      <div className={className}>
        <Link
          to={props.link || '/'}
          title="View this content"
          className="featured-tile-link"
        >
      <h4>{props.header || 'header'}</h4>
      <p>{props.shortDescription || ''}</p>
      </Link>
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
