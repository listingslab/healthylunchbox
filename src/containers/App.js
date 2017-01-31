/* global cms */
/**
 * Created by Chris Dorward on 20/01/2017
 * containers/App
 */

import React, { Component, PropTypes } from 'react';
import Loader from '../components/Loader/Loader';
import Header from '../components/Header/Header';
import API from '../API';

class App extends Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      endPoint: 'app'
    };
  }

  componentDidMount() {
    if (cms.init === undefined) {
      const api = new API(this.state.endPoint);
      api.getDataIfNeeded(`${this.state.endPoint}`, this.apiCallback.bind(this));
    } else {
      this.reRender();
    }
  }

  reRender() {
    this.setState({
      isLoaded: true
    });
  }

  apiCallback(cmsData) {
    cms.app = cmsData;
    this.setState({
      isLoaded: true
    });
  }

  render() {
    // If we're loading show the loader
    if (!this.state.isLoaded) {
      const loaderText = 'Loading Healthy Lunchbox';
      const loader = (
        <div className="container">
          <Loader
            text={loaderText}
          />
        </div>);
      return loader;
    }
    console.log(cms.app.data.navigation);
    return (
      <Header
        navItems={cms.app.data.navigation}
      />
    );
  }
}

export default App;
