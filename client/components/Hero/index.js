import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import lunchbox from './lunchbox.png'
export default class Hero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="hero">
        <Link to="/create-lunch-box">
          <img src={lunchbox} alt="" />
        </Link>
      </div>
    )
  }
}
