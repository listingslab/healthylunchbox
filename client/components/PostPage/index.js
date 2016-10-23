import React, { Component } from 'react'
import PostPageContent from '../PostPageContent'

export default class PostPage extends Component {

  componentWillMount() {
    const posts = JSON.parse(sessionStorage.getItem('posts'))
    const pagedata = posts.filter(post => post.slug === this.props.params.post)
    this.setState({data: pagedata[0]})
  }
  
  render() {
      return (
        <PostPageContent data={this.state.data} />
      )
  }
}
