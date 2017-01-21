import React from 'react';

class BackgroundImage extends React.Component {
  render() {
    const urls = {
      home: 'http://i.imgur.com/kJXRAZH.jpg',
      about: 'http://i.imgur.com/TaA1gj9.png'
    };
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };
    const src = urls[this.props.page];
    return <img alt="test" src={src} style={style} />;
  }
}
export default BackgroundImage;
