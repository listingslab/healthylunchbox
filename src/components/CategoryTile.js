/**
 * Created by Chris Dorward on 15/01/2017
 * components/CategoryTile
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CategoryTile(props) {
  let categoryType = 'Category Type';
  if (props.categoryType !== undefined) {
    categoryType = props.categoryType;
  }

  let title = 'Category Titile';
  if (props.title !== undefined) {
    title = props.title;
  }
  let thumbnail = '/img/daffs/green.png';
  if (categoryType === 'recipe') {
    thumbnail = '/img/daffs/orange.png';
  }

  if (props.thumbnail !== undefined) {
    if (props.thumbnail !== '') {
      thumbnail = props.thumbnail;
    }
  }

  let shortDescription = 'Category tile short description';
  if (props.shortDescription !== undefined) {
    shortDescription = props.shortDescription;
  }

  let link = 'Category tile short description';
  if (props.link !== undefined) {
    link = props.link;
  }

  let id = '0';
  if (props.id !== undefined) {
    id = props.id;
  }

  // console.log(props);
  // const editurl = `http://api.healthylunchbox.com.au/wp-admin/post.php?post=${id}&action=edit`;
  const editurl = 'http://api.healthylunchbox.com.au/wp-admin/post.php?post=0&action=edit';
  return (
      <div className="col-md-6">
        <div className="well">
          <img className="pull-right" alt={title} src={thumbnail} />
          <h3>{title}</h3>
          <p>{shortDescription}</p>
          <Link
            to={link}
            className="btn btn-primary"
            >View &raquo;</Link>
          &nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={editurl}
            className="btn btn-default"
        >Edit</Link>
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
