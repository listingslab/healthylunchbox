/**
 * Created by Chris Dorward on 15/01/2017
 * components/Tile/Tile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Tile.scss';

function FeaturedTile(props) {
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
// tileTypes
FeaturedTile.propTypes = {
  tileType: PropTypes.string.isRequired
};

export default FeaturedTile;

/*
*/
