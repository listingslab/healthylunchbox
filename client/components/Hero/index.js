import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { WP_HERO } from '../../constants'
import get from 'lodash.get'

export default class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: []
    }
  }

  componentWillMount() {
    if(sessionStorage.getItem('hero')) {
      const hero = JSON.parse(sessionStorage.getItem('hero'))
      this.setState({hero: hero[0]})
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
          <Link to={link}>
            Get Started
          </Link>
        </div>
        <div className="hero__image">
          <img src={image} />
        </div>
      </div>
    )
  }
}
