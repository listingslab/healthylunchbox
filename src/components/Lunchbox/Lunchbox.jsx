/**
 * Created by Chris Dorward on 15/01/2017
 * components/Lunchbox
 */

 import React, { Component, PropTypes } from 'react';
 import './Lunchbox.scss';

 class Lunchbox extends Component {

   static propTypes = {
     testVar: PropTypes.string
   }

   handleClick = () => {
     console.log('Lunchbox Button Was Clicked. We should do something about that');
   }

   render() {
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

 export default Lunchbox;
