import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './index.css';

import App from './components/App';
import Header from './components/Header';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Match exactly pattern="/" component={App} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
