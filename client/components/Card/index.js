import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-card">
          <h3>{this.props.title}</h3>
          {this.props.image ? <img src={this.props.image} alt=""/> : ''}
          <p>{this.props.description}</p>
          <Link to={this.props.link}>{this.props.label}</Link>
      </div>
    )
  }
}
