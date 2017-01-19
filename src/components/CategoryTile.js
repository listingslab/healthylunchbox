/**
 * Created by Chris Dorward on 15/01/2017
 * components/CategoryTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CategoryTile(props) {
  console.log(props);
  return (
    <div className="tile-category">
      <div className="col-md-6">
        <img alt={props.title} src={props.image} />
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
        <p><Link className="btn btn-success" to={props.link} role="button">More?</Link></p>
        <div className="clear-tile"></div>
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
