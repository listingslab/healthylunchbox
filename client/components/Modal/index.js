import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'
import get from 'lodash.get'

export default class ModalWindow extends Component {
  render() {
    const data = this.props.data[0]
    const group = get(data, 'acf.food_group')
    const title = get(data, 'title.rendered')
    const image = get(data, 'acf.food_image')
    const content = get(data, 'content.rendered')
    const currentItem = sessionStorage.getItem(group)

    return (
      <Modal isOpen={this.props.open} onRequestClose={this.props.close}>
        <button onClick={this.props.close}>Close</button>
         <img src={image} />
         { currentItem === image ? <button onClick={ this.props.remove }>Remove from lunchbox</button> : <button onClick={ this.props.add }>Add to lunchbox</button> }
         <h2>{title}</h2>
         <div dangerouslySetInnerHTML={{__html: content }}></div>
     </Modal>
    )
  }
}

ModalWindow.PropTypes = {
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
}
