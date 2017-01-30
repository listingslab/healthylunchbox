/* global showEdit */
/**
 * Created by Chris Dorward on 18/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './Header.scss';

function Header(props) {
  const className = `jumbotron header header-${props.itemTypes}`;
  let editBtn = null;
  if (showEdit) {
    editBtn = (<div className="pull-right">
      <Link className="btn btn-link edit-btn"
        href={props.editUrl || ''}
        role="button"
      ><span className="glyphicon glyphicon-pencil" />&nbsp;Edit</Link>

      <Link className="btn btn-link edit-btn"
        href={props.addUrl || ''}
        role="button"
      ><span className="glyphicon glyphicon-plus" />&nbsp;Add</Link>
    </div>
    );
  }

  return (
    <div className={className}>
    {editBtn}
    <div className="container">
      <h3>
        {props.pageTitle || ''}
      </h3>
      <p>{props.pageSubTitle || ''}
      </p>
    </div>
  </div>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageSubTitle: PropTypes.string.isRequired,
  editUrl: PropTypes.string.isRequired,
  addUrl: PropTypes.string.isRequired,
  itemTypes: PropTypes.string
};

export default Header;
