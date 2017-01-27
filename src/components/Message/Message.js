/**
 * Created by Chris Dorward on 24/01/2017
 * components/Message/Message
 */

import React, { PropTypes } from 'react';
import './Message.scss';

function Message(props) {
  const className = `alert alert-${props.type}`;
  const messageMarkup = { __html: props.message };
  const buttons = (<div className="message-buttons">hello</div>);
  const dismissBtn = (<button
    >DISMISS</button>
  );


  return (
    <div className={className} role="alert">
      <h4>{props.title}</h4>
      {buttons}
      <div dangerouslySetInnerHTML={messageMarkup} />


      // {props.showDismiss === true
      //  {dismissBtn}
      // <Button onClick={this.handleLogoutClick} />


    </div>
  );
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  showDismiss: PropTypes.bool,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;

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
