/**
 * Created by Chris Dorward on 16/01/2017
 * container/App
 */

import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PageTitle from '../components/PageTitle';

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  componentWillMount() {
    this.checkAPI('hello');
  }

  checkAPI(route) {
    this.apiPath = 'http://api.healthylunchbox.com.au/wp-json/hlbapi/';
    console.log(`Connect to, ${this.apiPath}${route}!`);
  }

  handleChange = (nextValue) => {
    browserHistory.push(`/${nextValue}`);
  }

  render() {
    const { children } = this.props;
    const showit = false;
    return (
      <div>
        <Header />

        <div className="container">

          {children}
        </div>

        <Footer />

        <Modal show={showit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(App);

/*
<PageTitle pageTitle={pageTitle} />

let pageTitle = 'Page not found';
switch (this.props.location.pathname) {
case '/':
  pageTitle = 'Home';
  break;

case '/builder':
  pageTitle = 'Builder';
  break;

case '/recipes':
  pageTitle = 'Recipes & Ideas';
  break;

case '/tips':
  pageTitle = 'Tips';
  break;

case '/about':
  pageTitle = 'About';
  break;

case '/featured':
  pageTitle = 'Featured Content';
  break;

default:
  pageTitle = 'Page not found :(';
}


*/
