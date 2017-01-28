/**
 * Created by Chris Dorward on 15/01/2017
 * components/Tile/Tile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Tile.scss';

function FeaturedTile(props) {
  const className = `well featured-tile tile tile-${props.itemType}`;
  return (
    <div className="col-md-6">
      <div className={className}>
        <Link
          className="btn btn-danger tile-btn-white pull-right"
          href={props.editLink}
          role="button"
        ><span className="glyphicon glyphicon-pencil"></span></Link>

        <Link
          to={props.link || '/'}
          title="View item"
          className="featured-tile-link"
        >
      <h4 className="tile-btn-title">{props.title || ''}</h4>
      </Link>
      <p>{props.subTitle || ''}</p>
      <p><small>Modified <strong>{props.itemModified || 'A long time ago'}</strong></small></p>

      </div>
    </div>
  );
}
// tileTypes
FeaturedTile.propTypes = {
  title: PropTypes.string.isRequired,
  itemModified: PropTypes.string.isRequired
};

export default FeaturedTile;

/*
*/
