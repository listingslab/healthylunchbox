/**
 * Created by Chris Dorward on 18/01/2017
 * components/Header/Header
 */

import React, { PropTypes } from 'react';
import './Header.scss';

function Header(props) {
  const className = `header header-${props.itemTypes}`;
  return (
    <div className={className}>
    <div className="container">
      <h3>
        {props.title || ''}
      </h3>
      <p>{props.catID || ''}: {props.subTitle || ''}
      </p>
    </div>
  </div>
  );
}

Header.propTypes = {
  catID: PropTypes.number,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  itemTypes: PropTypes.string
};

export default Header;
