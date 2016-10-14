import React, { Component } from 'react'

export default class Lunchbox extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="lunchbox">
        <div className="f">
          <div className="lunchbox__breads">
            <img src={this.props.breads}/>
          </div>
          <div className="lunchbox__vegies">
            <img src={this.props.vegies}/>
          </div>
          <div className="lunchbox__fruits">
            <img src={this.props.fruits}/>
          </div>
          <div className="lunchbox__meatsandalternatives">
            <img src={this.props.meatsandalternatives}/>
          </div>
          <div className="lunchbox__dairy">
            <img src={this.props.dairy}/>
          </div>
        </div>
      </div>
    )
  }
}
