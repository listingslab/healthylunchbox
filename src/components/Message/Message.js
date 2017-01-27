/**
 * Created by Chris Dorward on 24/01/2017
 * components/Message/Message
 */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import cookie from 'react-cookie';
import { Link, browserHistory } from 'react-router';
import './Message.scss';

function Message(props) {
  const dismissMessage = () => {
    console.log('fadeOut #message');
    $('#message').fadeOut();
  };

  const showCookies = () => {
    // console.log('showCookies');
    browserHistory.push('/cookies');
    $('#message').fadeOut();
  };

  const deleteCookies = () => {
    const HLBcookieCode = cookie.load('HLBcookieCode');
    if (HLBcookieCode !== undefined) {
      cookie.remove('HLBcookieCode', { path: '/' });
    }
    $('#message').fadeOut();
  };

  const suppressMessages = () => {
    console.log('suppressMessages');
  };

  const className = `alert alert-${props.type}`;
  const messageMarkup = { __html: props.message };
  let dismissBtn = '';
  if (props.showDismiss) {
    dismissBtn = (<button
      title="Dismiss this message"
      onClick={dismissMessage}
      className="btn btn-success message-btn">
      <span className="glyphicon glyphicon-ok-sign" /></button>);
  }
  let cookiesBtn = '';
  if (props.showCookies) {
    cookiesBtn = (<Link
      title="What do cookies mean for you?"
      onClick={showCookies}
      className="btn btn-info message-btn">
      <span className="glyphicon glyphicon-info-sign" /></Link>);
  }

  let cookiesDeleteBtn = '';
  if (props.showDeleteCookies) {
    cookiesDeleteBtn = (<Link
      title="Delete cookies"
      onClick={deleteCookies}
      className="btn btn-info message-btn">
      <span className="glyphicon glyphicon-remove-sign" /></Link>);
  }


  let suppressBtn = '';
  if (props.showSuppress) {
    suppressBtn = (<button
      title="Suppress all messages"
      onClick={suppressMessages}
      className="btn btn-info message-btn">
      <span className="glyphicon glyphicon-remove-sign" /></button>);
  }

  const buttonsDiv = (
    <div className="message-buttons">
      {cookiesBtn}
      {cookiesDeleteBtn}
      {suppressBtn}
      {dismissBtn}
    </div>
  );

  return (
    <div className={className} role="alert">
        {buttonsDiv}
        <h4>{props.title}</h4>
        <div dangerouslySetInnerHTML={messageMarkup} />
    </div>
  );
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  showDismiss: PropTypes.bool.isRequired,
  showCookies: PropTypes.bool.isRequired,
  showDeleteCookies: PropTypes.bool.isRequired,
  showSuppress: PropTypes.bool.isRequired,
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
