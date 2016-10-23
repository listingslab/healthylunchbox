import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import RequestManager from '../../services/request-manager'
import { WP_PAGES } from '../../constants'
import get from 'lodash.get'

import RelatedPages from '../RelatedPages'

export default class ParentPageContent extends Component {

  renderRelatedPages() {
    const pages = JSON.parse(sessionStorage.getItem('pages'))
    const relatedItem = this.props.data.slug
    const relatedPages = pages.filter(page  => get(page, 'acf.parent_page') == relatedItem)
    return relatedPages.map(item => <RelatedPages key={item.id} title={item.title} content={item.excerpt} parent={get(item, 'acf.parent_page')} page={item.slug}/>)
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
          {this.renderRelatedPages()}
        </div>

      </div>
    )
  }
}
