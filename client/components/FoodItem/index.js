import React, { Component } from 'react'

export default class FoodItem extends Component {
  render() {
    const data = this.props.data

    return (
      <div className="s-grid-cell fooditem">
        <div key={data.id} onClick={this.props.onClick}>
          <img src={data.acf.food_image} />
          <p>{data.title.rendered}</p>
        </div>
      </div>
    )
  }
}
