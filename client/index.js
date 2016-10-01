import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
import Page from './components/Page'
import Lunchbox from './components/Lunchbox'
import NotFound from './components/NotFound'

import css from  './style.styl';

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
