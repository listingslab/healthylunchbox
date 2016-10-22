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
    const customStyle = {
      content: {
        position                   : 'absolute',
        top                        : '10px',
        left                       : '10px',
        right                      : '10px',
        bottom                     : '10px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
      }
    }

    return (
      <Modal isOpen={this.props.open} onRequestClose={this.props.close} style={customStyle}>
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
