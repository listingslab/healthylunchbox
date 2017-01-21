/**
 * Created by Chris Dorward on 16/01/2017
 * index.js Application entrypoint
 */
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
// import ReactTransitionGroup from 'react-addons-transition-group';
import 'bootstrap/dist/css/bootstrap.css';
import reducer from './reducers';
import Root from './containers/Root';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);
