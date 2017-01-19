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
import PageTitle from '../components/PageTitle';

class App extends Component {
  static propTypes = {
    location: PropTypes.any,
    children: PropTypes.any
  }

  componentWillMount() {
    // console.log('call API with /hello');
  }

  handleChange = (nextValue) => {
    browserHistory.push(`/${nextValue}`);
  }

  render() {
    let pageTitle = 'Page not found';
    switch (this.props.location.pathname) {
    case '/':
      pageTitle = 'Home';
      break;

    case '/builder':
      pageTitle = 'Builder';
      break;

    case '/recipies':
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

    const { children } = this.props;
    const showit = false;
    return (
      <div>
        <Header />

        <div className="container">
          <PageTitle pageTitle={pageTitle} />
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
