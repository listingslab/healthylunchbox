/**
 * Created by Chris Dorward on 18/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import './Header.scss';

function Header(props) {
  const className = `single-header jumbotron single-header-${props.itemType}`;
  return (
    <div className={className}>
    <div className="container">
      <h2>
        {props.header || ''}
      </h2>
      <p>{props.shortDescription || ''}</p>
    </div>
  </div>
  );
}

Header.propTypes = {
  header: PropTypes.string,
  itemType: PropTypes.string,
  shortDescription: PropTypes.string
};

export default Header;
