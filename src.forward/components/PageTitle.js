/**
 * Created by Chris Dorward on 18/01/2017
 * components/PageTitle
 */

import React, { PropTypes } from 'react';

function PageTitle(props) {
  return (
    <div className="template-pagetitle">
        <h1>{ props.pageTitle }</h1>
    </div>
  );
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default PageTitle;
