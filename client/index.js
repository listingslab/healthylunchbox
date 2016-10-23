import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import 'isomorphic-fetch'

import App from './components/App'
import Home from './components/Home'
import ParentPage from './components/ParentPage'
import ChildPage from './components/ChildPage'
import PostPage from './components/PostPage'


import Page from './components/Page'
import Builder from './components/Builder'
import NotFound from './components/NotFound'

import css from  './styles/style.styl';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/create/lunchbox" component={Builder}></Route>
      <Route path=":slug" component={ParentPage}></Route>
      <Route path="/:slug/:slug" component={ChildPage}></Route>
      <Route path="/:slug/:slug/:post" component={PostPage}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
)

render(Routes, document.querySelector('#app'));
