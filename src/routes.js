/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';

const routes = <Route path="/" component={App}>
  <Route path="/:login/:name"
    component={RepoPage} />
  <Route path="/:login"
    component={UserPage} />
</Route>;

export default routes;
