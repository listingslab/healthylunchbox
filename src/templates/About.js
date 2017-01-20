/**
 * Created by Chris Dorward on 18/01/2017
 * templates/About
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="template-about">
        <div className="col-md-6">
          <h3>About</h3>
          <p>Eating enough fruit and veg everyday will give your kids the energy and
          nutrients they need to learn and play, and can help protect them against
          diseases including some forms of cancer.  This popular 25-minute session
          is run by Cancer Council NSW.</p>

      </div>
      <div className="col-md-6">
        <h3>&nbsp;</h3>
        <ul>
          <li>New and exciting ideas for healthy lunch boxes your kids will love</li>
          <li>A show bag including a great healthy lunch box kit and planner</li>
          <li>Simple ways to get the whole family eating fruit and veg – if <em>you</em> eat
            healthy your kids are more likely to, too!</li>
        </ul>

    </div>
    <div className="col-md-12 text-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/"
      >
        <img height="75" alt="Eat it to beat it" src="/img/EatItToBeatIt_trans.png" />
      </a>
    </div>
      </div>
    );
  }
}

export default connect()(About);
