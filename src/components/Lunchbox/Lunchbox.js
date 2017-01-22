/**
 * Created by Chris Dorward on 15/01/2017
 * components/Lunchbox
 */

 import React, { Component, PropTypes } from 'react';
 import { connect } from 'react-redux';
 // import BackgroundImage from '../BackgroundImage';

 import './Lunchbox.scss';

 class Lunchbox extends Component {

   static propTypes = {
     testVar: PropTypes.string
   }

   componentDidMount() {
    console.log(this.props);
    // const testVar = 'ok';
    // console.log(`Lunchbox componentDidMount() ${testVar}`);
   }

   handleClick = () => {
     console.log('Lunchbox Button Was Clicked. We should do something about that');
   }

   render() {
     // console.log('LUNCHBOX RENDER');
     return (
       <div className="lunchbox">
         <div className="centered text-center">
             <img
               className="img-responsive lunchbox-wide-image"
               src="/img/lunchbox.png"
               alt="The Lunchbox"
             />
         </div>
       </div>
     );
   }
 }

 export default connect()(Lunchbox);

/*



*/
