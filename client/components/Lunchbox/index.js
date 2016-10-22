import React, { Component } from 'react'
import vegies from './icon_veg.svg'
import meats from './icon_meats.svg'
import fruit from './icon_fruit.svg'
import dairy from './icon_dairy.svg'
import breads from './icon_breads.svg'

export default class Lunchbox extends Component {
  render() {
    return (
      <div className="lunchbox">
        <div className="f">
          <div className="lunchbox__breads">
            <img src={this.props.breads ?  this.props.breads : breads}/>
          </div>
          <div className="lunchbox__vegies">
            <img src={this.props.vegies ? this.props.vegies : vegies}/>
          </div>
          <div className="lunchbox__fruits">
            <img src={this.props.fruits ? this.props.fruits : fruit}/>
          </div>
          <div className="lunchbox__meatsandalternatives">
            <img src={this.props.meatsandalternatives ? this.props.meatsandalternatives : meats}/>
          </div>
          <div className="lunchbox__dairy">
            <img src={this.props.dairy ? this.props.dairy : dairy}/>
          </div>
        </div>
      </div>
    )
  }
}
