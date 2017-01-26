/**
 * Created by Chris Dorward on 16/01/2017
 * index.js Application entrypoint
 */

// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import Root from './containers/Root';

render(
  <Root history={browserHistory} />,
  document.getElementById('root')
);
