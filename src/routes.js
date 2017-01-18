/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Tips from './containers/Tips';
import Recipies from './containers/Recipies';
import NotFound from './containers/NotFound';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/tips" component={Tips} />
      <Route path="/recipies" component={Recipies} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
/*
<Route path="/tips" component={TipsPage} />
<Route path="/tip" component={TipsPage}>
  <Route path="/tip/:tipId" component={TipPage} />
</Route>
<Route path="*" component={NotFound} />
*/
