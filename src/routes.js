/**
 * Created by Chris Dorward on 16/01/2017
 * Routes
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Accessible from './templates/Accessible';
import CategoryPage from './templates/CategoryPage';
import CategoriesPage from './templates/CategoriesPage';
import About from './templates/About';
import Builder from './templates/Builder';
import Home from './templates/Home/Home';
import RecipeItem from './templates/RecipeItem/RecipeItem';
import TipItem from './templates/TipItem/TipItem';
import NotFound from './templates/NotFound';
import Item from './templates/Item';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/categories" component={CategoriesPage} />

      <Route path="/recipes" component={CategoriesPage} />
      <Route path="/recipe" component={RecipeItem} />

      <Route path="/tips" component={CategoriesPage} />
      <Route path="/tip" component={TipItem} />

      <Route path="/about" component={About} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
