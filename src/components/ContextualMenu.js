/**
 * Created by Chris Dorward on 15/01/2017
 * components/ContextualMenu
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ContextualMenu(props) {
  // console.log(props);
  // http://getbootstrap.com/components/
  return (
    <div className="template-context-menu">
      <Link
        to="/"
        className="btn btn-default"
      ><span className="glyphicon glyphicon-arrow-left"></span></Link>&nbsp;
      <Link
        to="/"
        className="btn btn-default"
      ><span className="glyphicon glyphicon-refresh"></span></Link>&nbsp;
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
