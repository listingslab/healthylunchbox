/**
 * Created by Chris D on 17/12/2016.
 * Application Entrypoint
 */

import React from 'react';
import { connect } from 'react-redux';
import verge from 'verge';
import Window from './components/Window/Window';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    // https://www.npmjs.com/package/verge
    this.setState(verge.viewport());
  }

  handleThumbClick(selectedImage) {
    this.setState({
      image: selectedImage
    })
  }

  render() {
    return (
      <div onClick={this.handleThumbClick.bind('dslfj')}>
        Trigger Action
      </div>
    );
  }
}
export default connect()(App);
