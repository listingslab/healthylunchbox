import React, { Component } from 'react'

export default class FoodItem extends Component {
  constructor(props) {
    super()
  }

  render() {
    const data = this.props.data

    return (
      <div className="s-grid-cell">
        <div key={data.id} onClick={this.props.onClick}>
          <img src={data.acf.food_image} />
          <h2>{data.title.rendered}</h2>
        </div>
      </div>
    )
  }
}
