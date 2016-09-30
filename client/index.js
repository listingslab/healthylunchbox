import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import css from  './style.styl';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={Home} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#app'));
