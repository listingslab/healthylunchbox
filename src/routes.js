/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Category from './templates/Category/Category';
import Categories from './templates/Categories/Categories';
import HealthyLunchbox from './templates/HealthyLunchbox//HealthyLunchbox';
import About from './templates/About/About';
import Home from './templates/Home/Home';
import Item from './templates/Item/Item';
import NotFound from './templates/NotFound//NotFound';
import Recipes from './templates/Recipes/Recipes';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/categories" component={Categories} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/tips" component={Categories} />
      <Route path="/tip" component={Item} />
      <Route path="/item" component={Item} />
      <Route path="/about" component={About} />
      <Route path="/healthy-lunch-box" component={HealthyLunchbox} />
      <Route path="/cookies" component={Item} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
