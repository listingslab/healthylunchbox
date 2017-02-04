/**
 * Created by Chris Dorward on 04/02/2017
 * components/ScreenLunchbox/ScreenLunchbox
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './ScreenLunchbox.scss';

function ScreenLunchbox(props) {
  // const text = props.text || 'default';
  return (
    <div className="text-center">
        <Link className="btn btn-default edit-btn"
          href={props.editUrl || ''}
          title="Edit content"
      ><span className="glyphicon glyphicon-pencil" />&nbsp;&nbsp;EDIT</Link>
    </div>
  );
}

ScreenLunchbox.propTypes = {
  editUrl: PropTypes.string.isRequired
};

export default ScreenLunchbox;
