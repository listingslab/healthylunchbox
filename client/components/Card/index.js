import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch'
import get from 'lodash.get'

export default class Card extends Component {
  render() {
    const props = this.props
    const title = get(props, 'title.rendered')
    const description = get(props, 'description.rendered')
    const link = '/information/' + this.props.link

    return (
      <div className="content-card">
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{__html: description}}/>
          <Link to={link}>Read more</Link>
      </div>
    )
  }
}
