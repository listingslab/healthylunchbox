/**
 * Created by Chris Dorward on 16/01/2017
 * index.js Application entrypoint
 */
// global.jQuery = require('jquery');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
// import createLogger from 'redux-logger';
import reducer from './reducers';
import App from './containers/App';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
