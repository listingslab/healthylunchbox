/* global cms */
/* global editor */
/**
 * Created by Chris Dorward on 12/02/2017
 * components/YourTip/YourTip
 */

import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

function YourTip(props) {
  console.log(props);
  return (
    <div className="your-tip col-md-6">
      fsdaf fa
    </div>
  );
}

YourTip.propTypes = {
  tipData: PropTypes.any.isRequired
};

export default YourTip;
