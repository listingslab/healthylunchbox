/**
 * Created by Chris D on 17/12/2016.
 * Application Entrypoint
 */

import React from 'react';
import { connect } from 'react-redux';
// https://react-bootstrap.github.io/getting-started.html

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>Healthy Lunch Box</div>
    );
  }
}
export default connect()(App);
