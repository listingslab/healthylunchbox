import React, { Component } from 'react'
import get from 'lodash.get'

export default class ParentPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props
    const title = get(data, 'title.rendered')
    const description = get(data, 'content.rendered')
    const parent = data.parent
    const link = data.page
    return (
      <div className="s-grid-cell">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{__html: description}}/>
        <a href={link}>Read more</a>
      </div>
    )
  }
}
