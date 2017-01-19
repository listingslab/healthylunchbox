/**
 * Created by Chris Dorward on 18/01/2017
 * container/PageTitle
 */

import React, { PropTypes } from 'react';

function PageTitle(props) {
  return (
    <div className="page-title">
        <h1>{ props.pageTitle }</h1>
    </div>
  );
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default PageTitle;
