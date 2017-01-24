/**
 * Created by Chris Dorward on 24/01/2017
 * components/ErrorMessage/ErrorMessage
 */

import React from 'react';

import './ErrorMessage.scss';

function ErrorMessage(props) {
  const className = `alert alert-${props.errorType}  container row`;
  return (
    <div className={className} role="alert">
      <strong>{props.errorTitle}</strong><br />{props.errorMessage}
    </div>
  );
}

export default ErrorMessage;

/*
<div className="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>
<div className="alert alert-info" role="alert">
  <strong>Heads up!</strong> This alert needs your attention.
</div>
<div className="alert alert-warning" role="alert">
  <strong>Warning!</strong> Best check yo self.
</div>
<div className="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
*/
