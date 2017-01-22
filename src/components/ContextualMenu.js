/**
 * Created by Chris Dorward on 15/01/2017
 * components/ContextualMenu
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ContextualMenu(props) {
  // console.log(props);
  return (
    <div className="template-context-menu">
      <Link
        to="/back"
        className="btn btn-default"
      >Back</Link>&nbsp;
      <Link
        to="/this-category"
        className="btn btn-default"
      >Others in this category</Link>
      <Link
        to="/this-category"
        className="btn btn-default"
      >Next in this category</Link>
      <Link
        to="/accessible"
        className="btn btn-default"
      >Accessible Version</Link>
    </div>
  );
}

ContextualMenu.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  categoryType: PropTypes.string,
  thumbnail: PropTypes.string,
  shortDescription: PropTypes.string
};

export default ContextualMenu;
