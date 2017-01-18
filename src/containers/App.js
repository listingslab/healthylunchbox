/**
 * Created by Chris Dorward on 16/01/2017
 * container/App
 */

import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

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
    let jumbotronTitle = 'Title Not Found';
    const pathName = this.props.location.pathname;
    if (pathName === '/recipies') {
      jumbotronTitle = '';
    } else if (pathName === '/tips') {
      jumbotronTitle = '';
    } else if (pathName === '/') {
      jumbotronTitle = 'Lunchbox Builder';
    } else if (pathName === '/featured') {
      jumbotronTitle = 'Featured';
    } else if (pathName === '/featured') {
      jumbotronTitle = 'Featured';
    }

    switch (this.props.location.pathname) {

    case '/':
      jumbotronTitle = 'Home';
      break;

    case '/recipies':
      jumbotronTitle = 'Recipies & Ideas';
      break;

    case '/tips':
      jumbotronTitle = 'Tips';
      break;

    case '/about':
      jumbotronTitle = 'About';
      break;

    case '/featured':
      jumbotronTitle = 'About';
      break;

    default:
      jumbotronTitle = 'No Title Found';
    }

    const { children } = this.props;
    const showit = false;
    return (
      <div>
        <Header />
        <Modal show={showit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        </Modal>
        <div className="container">
          <Jumbotron jumbotronTitle={jumbotronTitle} />
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(App);
