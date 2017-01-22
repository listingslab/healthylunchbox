/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import About from './templates/About';
import Builder from './templates/Builder';
import Home from './templates/Home';
import NotFound from './templates/NotFound';
import Tips from './templates/Tips';
import Recipes from './templates/Recipes';
import Single from './templates/Single';
import CatagoryPage from './templates/CatagoryPage';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/builder" component={Builder} />
      <Route path="/categorypage" component={CatagoryPage} />
      <Route path="/about" component={About} />
      <Route path="/tips" component={Tips} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/single" component={Single} />
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
