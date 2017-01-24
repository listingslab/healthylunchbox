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
          className="btn btn-default pull-right"
          href={props.editLink}
          role="button"
        ><span className="glyphicon glyphicon-pencil"></span></Link>

        <Link
          to={props.link || '/'}
          title="View this content"
          className="featured-tile-link"
        >
      <h4 className="white-txt">{props.header || 'header'}</h4>
      <p className="white-txt">{props.shortDescription || ''}</p>
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
