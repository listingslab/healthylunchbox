import React, { Component } from 'react'
import get from 'lodash.get'
export default class ParentPage extends Component {

  render() {
    const data = this.props.data
    const title = get(data, 'title.rendered')
    const description = get(data, 'content.rendered')
    const link = this.props.parent + '/' + data.slug
    return (
      <div className="s-grid-cell">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{__html: description}}/>
        <a href={link}>Read more</a>
      </div>
    )
  }
}
