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

  componentDidMount() {
    fetch('http://localhost:8888/wp-json/wp/v2/pages?slug=' + this.props.params.slug)
      .then(response => response.json())
      .then(data => this.setState({data: data[0]}))
  }

  render() {
    return (
      <div>
        {this.state.data ? <PageContent data={this.state.data}/> : <NotFound /> }
      </div>
    )
  }
}
