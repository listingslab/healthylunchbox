/**
 * Created by Chris D on 17/12/2016.
 * Application Entrypoint
 */

import React from 'react';
import { connect } from 'react-redux';

// http://getbootstrap.com/examples/jumbotron-narrow/

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li role="presentation" className="active"><a href="/">Home</a></li>
              <li role="presentation"><a href="/About">About</a></li>
              <li role="presentation"><a href="/Contact">Contact</a></li>
            </ul>
          </nav>
          <h3 className="text-muted">Healthy Lunch Box</h3>
        </div>

        <div className="jumbotron">
          <h1>Jumbotron heading</h1>
          <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-lg btn-success" href="/sign-up" role="button">Sign on today</a></p>
        </div>

        <div className="row">

          <div className="col">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus.
              Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

        </div>

        <footer className="footer">
          <p>&copy; 2017 Cancer Council NSW.</p>
        </footer>


      </div>
    );
  }
}
export default connect()(App);
