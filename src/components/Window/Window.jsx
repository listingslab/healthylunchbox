/**
 * Created by Chris D on 17/12/2016.
 */

import React, { Component } from 'react';
import Rndwin from 'react-rnd';

const style = {
  border: 'solid 3px rgba(256,256,256,0.75)',
  background: 'rgba(256,256,256,0.5)'
};

export default class Window extends Component {

  constructor(props) {
    super(props);
    this.state = { zIndex: 99 };
    setTimeout(() => this.setState({ zIndex: 1000 }), 5000);
  }

  render() {
    return (
      <Rndwin
        ref={(c) => { this.rnd = c; }}
        initial={{
          // x: (window.innerWidth / 2) - 200,
          // y: (window.innerHeight / 2) - 80,
          width: 500,
          height: 500
        }}
        style={style}
        minWidth={300}
        minHeight={160}
        maxWidth={1000}
        maxHeight={800}
        bounds={'parent'}
        zIndex={this.state.zIndex}
      >
        <span className="box">
          <h2>Window #1</h2>
        </span>
      </Rndwin>
    );
  }
}
