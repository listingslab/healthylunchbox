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
    const image =  get(props, 'acf.contentcard_image')
    const label = get(props, 'acf.contentcard_label')
    const link = '/information/' + get(props, 'acf.contentcard_link')

    return (
      <div className="content-card">
          <h3>{title}</h3>
          { image ? <img src={image} />: "" }
          <div dangerouslySetInnerHTML={{__html: description}}/>
          <Link to={link}>{label}</Link>
      </div>
    )
  }
}
