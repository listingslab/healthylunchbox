/**
 * Created by Chris Dorward on 15/01/2017
 * components/CategoryTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CategoryTile(props) {
  // console.log(props);
  return (
    <div className="tile-category">
      <div className="col-md-6">
        <Link to={props.link} className="category-tile-link" role="button">
        <div className="well category-tile">

        <img className="pull-right" alt={props.title} src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>

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
