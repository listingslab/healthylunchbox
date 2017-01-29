/**
 * Created by Chris Dorward on 15/01/2017
 * components/Tile/Tile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Tile.scss';

function FeaturedTile(props) {
  const className = `well featured-tile tile tile-${props.itemType}`;
  const classNameBtn = `btn btn-default tile-full-width tile-title-btn-${props.itemType}`;
  return (
    <div className="col-md-6">
      <div className={className}>

        <Link
          className={classNameBtn}
          to={props.editUrl}
          role="button"
        ><span className="glyphicon glyphicon-hand-right" />&nbsp;&nbsp;{props.title || ''}</Link>


      <div className="tile-sub-title">
        <Link
          className="btn btn-link tile-btn-edit pull-right"
          title="Edit content"
          href={props.editUrl}
        ><span className="glyphicon glyphicon-pencil" />&nbsp;Edit</Link>
      <p>{props.subTitle || ''}</p>
      </div>

      </div>
    </div>
  );
}
// tileTypes
FeaturedTile.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  editUrl: PropTypes.string,
  itemType: PropTypes.string
  // itemModified: PropTypes.string.isRequired
};

export default FeaturedTile;

/*
<p><small>Modified <strong>{props.itemModified || 'A long time ago'}</strong></small></p>
*/
