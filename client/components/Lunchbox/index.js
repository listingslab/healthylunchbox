import React, { Component } from 'react'

export default class Lunchbox extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="lunchbox">
        <img src={this.props.breads}/>
        <img src={this.props.vegies}/>
        <img src={this.props.fruits}/>
        <img src={this.props.meatsandalternatives}/>
        <img src={this.props.dairy}/>
      </div>
    )
  }
}
