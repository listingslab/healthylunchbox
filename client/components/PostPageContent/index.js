import React, { Component } from 'react'
export default class PostPageContent extends Component {
  render() {
    const { title, content } = this.props.data

    return (
      <div>
        <h1>{title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: content.rendered}}/>
      </div>
    )
  }
}
