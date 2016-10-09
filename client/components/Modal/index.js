import React, { Component } from 'react'
import Modal from 'react-modal'

export default class ModalWindow extends Component {
  render() {
    const data = this.props.data

    return (
      <Modal isOpen={this.props.open}>
      <button onClick={this.props.state}>Close</button>
        <div className="food">
         <img src={data.image} />
         <button onClick="">Add to lunchbox</button>
         <h2>{data.title}</h2>
         <p>{data.content}</p>
        </div>
     </Modal>
    )
  }
}
