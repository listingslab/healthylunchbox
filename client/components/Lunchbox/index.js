import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import Carousel from 'nuka-carousel'

export default class Lunchbox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Carousel>
          <div className="option">
            Make your own
          </div>
      </Carousel>
    )
  }
}
