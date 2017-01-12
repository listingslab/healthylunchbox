/**
 * Created by Chris D on 17/12/2016.
 * Application Entrypoint
 */

import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Healthy Lunch Box</h2>
      </div>
    );
  }
}
export default connect()(App);
