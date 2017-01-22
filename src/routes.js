/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import CategoryPage from './templates/CategoryPage';
import Accessible from './templates/Accessible';
import CategoriesPage from './templates/CategoriesPage';
import About from './templates/About';
import Builder from './templates/Builder';
import Home from './templates/Home';
import NotFound from './templates/NotFound';
import Single from './templates/Single';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/accessible" component={Accessible} />
      <Route path="/builder" component={Builder} />
      <Route path="/about" component={About} />
      <Route path="/tips" component={CategoriesPage} />
      <Route path="/users/:userId" component={Single} />
      <Route path="/recipes" component={CategoriesPage} />
      <Route path="/item" component={Single} />
      <Route path="/item/:postID" component={Single} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
