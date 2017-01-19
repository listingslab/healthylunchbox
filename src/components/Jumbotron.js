/**
 * Created by Chris Dorward on 18/01/2017
 * container/Jumbotron
 */

import React from 'react';
import { Link } from 'react-router';

function Jumbotron(props) {
  console.log(props);
  return (

      <div className="container">
        <h2>{ props.jumbotronTitle }</h2>
        <p>Eating enough fruit and veg everyday will give your kids the energy
          and nutrients they need to learn and play, and can help protect them
          against diseases including some forms of cancer.</p>
        
    </div>
  );
}

Jumbotron.propTypes = {
};

export default Jumbotron;
