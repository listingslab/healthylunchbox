import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Hero from '../Hero'
import Card from '../Card'
import { WP_POSTS } from '../../constants'
import RequestManager from '../../services/request-manager'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      contentCards: []
    }
  }

  componentWillMount() {
    if(!sessionStorage.getItem('contentcards')) {
      RequestManager.get(WP_POSTS).then(payload => {
        sessionStorage.setItem('contentcards', JSON.stringify(payload))
        this.setState({contentCards: payload})
      })
    }
    if(sessionStorage.getItem('contentcards')) {
      const contentCards = JSON.parse(sessionStorage.getItem('contentcards'))
      this.setState({contentCards: contentCards})
    }
  }

  render() {
    return (
      <div>
        <div className="row hero">
          <div className="container">
            <Hero />
          </div>
        </div>
        <div className="row">
          <div className="container">
            { this.state.contentCards ? this.state.contentCards.map(cards => <Card key={cards.id} title={cards.title} description={cards.content} link={cards.slug} />) : ""}
          </div>
      </div>
      </div>
    )
  }
}
