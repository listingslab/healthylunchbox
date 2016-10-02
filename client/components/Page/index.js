import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import PageContent from '../Content'
import NotFound from '../NotFound'

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    const slug = this.props.params.slug
    if(!sessionStorage.getItem('pages')) {
      fetch('http://localhost:8888/wp-json/wp/v2/pages')
        .then(response => response.json())
        .then(data => sessionStorage.setItem('pages', JSON.stringify(data)))
    }
    if(sessionStorage.getItem('pages')) {
      const allPageData = JSON.parse(sessionStorage.getItem('pages'))
      const pageData = allPageData.filter(page => page.slug === slug)
      this.setState({data: pageData[0]})
    }
  }

  render() {
    return (
      <div className="container">
        { this.state.data ? <PageContent data={this.state.data}/> : <NotFound /> }
      </div>
    )
  }
}
