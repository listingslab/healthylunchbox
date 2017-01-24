/**
 * Created by Chris Dorward on 15/01/2017
 * components/CategoryTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CategoryTile(props) {
  // console.log(props);
  // const editurl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${id}&action=edit`;
  // const editurl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=0&action=edit';
  return (
      <div className="col-md-6">
        <div className="well">
          <h4>
            <Link
            to={props.url || '/no-url-found-in-props'}
          >{props.title || 'No title found in props'}</Link>
      </h4>
        <p>{props.shortDescription || ''}</p>
        </div>
    </div>
  );
}

CategoryTile.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  categoryType: PropTypes.string,
  thumbnail: PropTypes.string,
  shortDescription: PropTypes.string
};

export default CategoryTile;

/*
<img className="pull-right" alt={title} src={thumbnail} />
*/
