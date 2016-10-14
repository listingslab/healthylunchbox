import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import fetch from 'isomorphic-fetch'

import App from './components/App'
import Home from './components/Home'
import Page from './components/Page'
import Lunchbox from './components/Lunchbox'
import NotFound from './components/NotFound'

import RequestManager from './services/request-manager'
import { WP_PAGES, WP_POSTS } from './constants'

import css from  './styles/style.styl';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/pages/:slug" component={Page}></Route>
      <Route path="/create-lunch-box" component={Lunchbox}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
)

render(Routes, document.querySelector('#app'));
