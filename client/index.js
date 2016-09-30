import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import App from './components/App'
import Header from './components/Header'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#app'));
