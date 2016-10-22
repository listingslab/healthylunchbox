import React, { Component } from 'react'
import ChildPageContent from '../ChildPageContent'

export default class ChildPage extends Component {
  componentWillMount() {
    const getPages = sessionStorage.getItem('pages')
    const slug = this.props.params.slug

    if(getPages) {
      const allPageData = JSON.parse(sessionStorage.getItem('pages'))
      const pageData = allPageData.filter(page => page.slug === slug[1])
      this.setState({data: pageData[0]})
    }

  }
  render() {
    return (
      <ChildPageContent data={this.state.data} />
    )
  }

}
