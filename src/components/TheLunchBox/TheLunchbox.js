/**
 * Created by Chris Dorward on 15/01/2017
 * components/TheLunchbox
 */

 import React, { Component, PropTypes } from 'react';
 import { connect } from 'react-redux';
 import { selectHLB, fetchPostsIfNeeded, invalidateHLB } from '../../actions';

 import './TheLunchbox.scss';

 class TheLunchbox extends Component {

   static propTypes = {
     selectedHLB: PropTypes.string.isRequired,
     posts: PropTypes.any.isRequired,
     isFetching: PropTypes.bool.isRequired,
     lastUpdated: PropTypes.number,
     children: PropTypes.any,
     dispatch: PropTypes.func.isRequired
   }

   componentDidMount() {
     console.log('TheLunchbox componentDidMount()');
     console.log(this.props.eventthing);
   }

   componentWillReceiveProps(nextProps) {
   }

   handleClick = () => {
     console.log('click event');
   }

   render() {
     return (
       <div
         className="lunchbox"
         onClick={this.handleClick}
        >
         The Lunchbox.
       </div>
     );
   }
 }

 const mapStateToProps = (state) => {
   const { selectedHLB, postsByHLB } = state;
   const {
     isFetching,
     lastUpdated,
     items: posts
   } = postsByHLB[selectedHLB] || {
     isFetching: true,
     items: []
   };

   return {
     selectedHLB,
     posts,
     isFetching,
     lastUpdated
   };
 };

 export default connect(mapStateToProps)(TheLunchbox);

/*
<div className="lunchbox container">The Lunchbox </div>
<div className="container lunchbox">
  <div className="centered text-center">
      <img
        className="img-responsive"
        src="/img/lunchbox.png"
        alt="The Lunchbox"
      />
  </div>
</div>
<div className="lunchbox well container-table">
  <div className="row vertical-center-row">
    <div className="text-center col-md-4 col-md-offset-4">TEXT</div>
  </div>
</div>
*/
