/**
 * Created by Chris Dorward on 15/01/2017
 * components/ContextualMenu
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ContextualMenu(props) {
  // console.log(props);
  // http://getbootstrap.com/components/
  const links = [];
  if (props.editUrl) {
    links.push(<Link
      key={'edit'}
      href={props.editUrl}
      className="btn btn-default"
    ><span className="glyphicon glyphicon-pencil"></span>&nbsp;{props.editText}</Link>);
  }

  return (
    <div className="template-context-menu">
      {links}
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
