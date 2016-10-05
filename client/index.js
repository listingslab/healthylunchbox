import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'
import fetch from 'isomorphic-fetch'

import Header from './components/Header'
import Home from './components/Home'
import Page from './components/Page'
import Lunchbox from './components/Lunchbox'
import NotFound from './components/NotFound'
import RequestManager from './services/request-manager'
import { WP_PAGES, WP_CONTENTCARDS, WP_HERO } from './constants'

import css from  './style.styl';


if(!sessionStorage.getItem('pages')) {
    RequestManager.get(WP_PAGES).then(payload => {
      sessionStorage.setItem('pages', JSON.stringify(payload))
    })
}

if(!sessionStorage.getItem('hero')) {
    RequestManager.get(WP_HERO).then(payload => {
      sessionStorage.setItem('hero', JSON.stringify(payload))
    })
}

if(!sessionStorage.getItem('contentcards')) {
  RequestManager.get(WP_CONTENTCARDS).then(payload => {
    sessionStorage.setItem('contentcards', JSON.stringify(payload))
  })
}

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/information/:slug" component={Page} />
          <Match exactly pattern="/create-lunch-box" component={Lunchbox} />
          <Miss component={NotFound} />
        </main>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#app'));
