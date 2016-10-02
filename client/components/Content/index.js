import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import get from 'lodash.get'

export default class PageContent extends Component {
  render() {
    const data = this.props.data
    const title = get(data, 'title.rendered')
    const content = get(data, 'content.rendered')

    return (
      <div className="content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}/>
      </div>
    )
  }
}
