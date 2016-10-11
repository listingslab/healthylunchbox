import React, { Component } from 'react'
import Header from './Header'
import { WP_POSTS, WP_PAGEs } from '../constants'
import RequestManager from '../services/request-manager'

export default class App extends Component {
  constructor(props) {
    super()
  }

  componentWillMount() {

    if(!sessionStorage.getItem('pages')) {
        RequestManager.get(WP_PAGES).then(payload => {
          sessionStorage.setItem('pages', JSON.stringify(payload))
        })
    }

    if(!sessionStorage.getItem('posts')) {
      RequestManager.get(WP_POSTS).then(payload => {
        sessionStorage.setItem('posts', JSON.stringify(payload))
      })
    }

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
