import React, { Component } from 'react'
import Modal from 'react-modal'

export default class ModalWindow extends Component {
  render() {
    const data = this.props.data
    const group = data.group
    const title = data.title
    const image = data.image
    const content = data.content
    const currentItem = sessionStorage.getItem(group)

    return (
      <Modal isOpen={this.props.open} onRequestClose={this.props.close}>
        <button onClick={this.props.close}>Close</button>
        <div className="food">
         <img src={image} />
         { currentItem === image ? <button onClick={ this.props.remove }>Remove from lunchbox</button> : <button onClick={ this.props.add }>Add to lunchbox</button> }
         <h2>{title}</h2>
         <p>{content}</p>
        </div>
     </Modal>
    )
  }
}
