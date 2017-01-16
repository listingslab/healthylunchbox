/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import App from './containers/App';
import TipsPage from './containers/TipsPage';
import TipPage from './containers/TipPage';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFound';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/tips" component={TipsPage} />
      <Route path="/tip">
        <Route path="/tip/:tipId" component={TipPage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
