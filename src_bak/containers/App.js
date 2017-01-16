import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from '../components/Header';

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  componentWillMount() {
    console.log('call API with /hello');
    // loadData(this.props);
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
        <Modal show={showit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        </Modal>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {

})(App);
