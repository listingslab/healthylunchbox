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
        <div className="info">
        <span className="close" onClick={this.props.close}><b>Close Modal</b></span>
         <img src={image} />
         <h2>{title}</h2>
         { currentItem === image ? <button className="unpack" onClick={ this.props.remove }>UNPACK IT!</button> : <button className="pack" onClick={ this.props.add }>PACK IT!</button> }
         <div dangerouslySetInnerHTML={{__html: content }}></div>
         </div>
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
