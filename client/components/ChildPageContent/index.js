import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import get from 'lodash.get'

import RelatedPosts from '../RelatedPosts'

export default class ChildPageContent extends Component {

  relatedPosts() {
    const getPosts = sessionStorage.getItem('posts')
    const slug = this.props.data.slug

    if(getPosts) {
      const posts = JSON.parse(getPosts)
      const relatedPosts = posts.filter(post => get(post, 'acf.inspo_section') === slug)
      return relatedPosts.map(item => <RelatedPosts key={item.id} data={item} parent={slug} />)
    }
  }

  render() {
    const data = this.props.data
    const title = get(data, 'title.rendered')
    const content = get(data, 'content.rendered')

    return (
      <div className="content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}/>

        <div className="s-grid-top s-grid-xs-12 s-grid-sm-6 s-grid-md-4">
          {this.relatedPosts()}
        </div>
      </div>
    )
  }
}
