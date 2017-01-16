/**
 * Created by Chris Dorward on 15/01/2017
 * Application entrypoint
 */
// eslint-disable-next-line no-unused-vars
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
