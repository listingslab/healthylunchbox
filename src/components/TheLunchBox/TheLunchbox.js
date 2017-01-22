/**
 * Created by Chris Dorward on 15/01/2017
 * components/TheLunchbox
 */

 import React, { Component, PropTypes } from 'react';
 import { connect } from 'react-redux';
 // import BackgroundImage from '../BackgroundImage';

 import './TheLunchbox.scss';

 class TheLunchbox extends Component {

   static propTypes = {
     testVar: PropTypes.string
   }

   componentDidMount() {
    // console.log(this.props);
    // const testVar = 'ok';
    // console.log(`TheLunchbox componentDidMount() ${testVar}`);
   }

   handleClick = () => {
     console.log('Lunchbox Button Was Clicked. We should do something about that');
   }

   render() {
     // console.log('LUNCHBOX RENDER');
     return (
       <div className="lunchbox">
         <button
           className="btn btn-success"
           onClick={this.handleClick}
          >
          Open The Lunchbox.
        </button>
       </div>
     );
   }
 }

 export default connect()(TheLunchbox);

/*

  <div className="centered text-center">
      <img
        className="img-responsive"
        src="/img/lunchbox.png"
        alt="The Lunchbox"
      />
  </div>

*/
