/**
 * Created by Chris Dorward on 16/01/2017
 * Root container
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
// import DevTools from './DevTools';
// <DevTools />

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.shape({
  }),
  history: React.PropTypes.shape({
  })
};

export default Root;
