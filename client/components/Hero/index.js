import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { WP_HERO } from '../../constants'
import RequestManager from '../../services/request-manager'
import get from 'lodash.get'

export default class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: []
    }
  }

  componentWillMount() {
    const getHero = sessionStorage.getItem('hero')

    if(!getHero) {
      RequestManager.get(WP_HERO).then(payload => {
        sessionStorage.setItem('hero', JSON.stringify(payload[0]))
        this.setState({hero: payload[0]})
      })
    }

    if(getHero) {
      const hero = JSON.parse(getHero)
      this.setState({hero: hero})
    }

  }

  render() {

    const data = this.state.hero
    const title = get(data, 'title.rendered')
    const description = get(data, 'content.rendered')
    const image =  get(data, 'acf.hero_image')
    const link = get(data, 'acf.hero_main_link')

    return (
      <div className="hero">
        <div className="hero__content">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{__html: description}}/>
          { link ? <Link to={link}>Get started</Link> : "" }
        </div>
        <div className="hero__image">
          <img src={image} />
        </div>
      </div>
    )
  }
}
