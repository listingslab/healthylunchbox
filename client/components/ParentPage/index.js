import React, { Component } from 'react'
import ParentPageContent from '../ParentPageContent'
import NotFound from '../NotFound'

export default class ParentPage extends Component {

  componentWillMount() {
    const getPages = sessionStorage.getItem('pages')
    const slug = this.props.params.slug

    if(getPages) {
      const allPageData = JSON.parse(sessionStorage.getItem('pages'))
      const pageData = allPageData.filter(page => page.slug === slug)
      this.setState({data: pageData[0]})
    }
  }

  render() {
    return (
      <div className="container">
        { this.state.data ? <ParentPageContent data={this.state.data}/> : <NotFound /> }
      </div>
    )
  }
}
