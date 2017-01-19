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
        <p>Eating enough fruit and veg everyday will give your kids the energy and
        nutrients they need to learn and play, and can help protect them against
        diseases including some forms of cancer.  This popular 25-minute session
        is run by Cancer Council NSW.</p>
        <h3>the <em>Eat It To Beat It</em> program will give you...</h3>
        <ul>
          <li>New and exciting ideas for healthy lunch boxes your kids will love</li>
          <li>A show bag including a great healthy lunch box kit and planner</li>
          <li>Simple ways to get the whole family eating fruit and veg – if <em>you</em> eat
            healthy your kids are more likely to, too!</li>
        </ul>
        <p>Interested in coming to a session? Register your interest by filling visiting 
          <a href="https://www.cancercouncil.com.au/24680/cancer-prevention/diet-exercise/eat-it-to-beat-it-eating-moving/eat-it-to-beat-it-for-health-professionals/about-the-eat-it-to-beat-it-program/contact/?pp=71974&amp;cc=9523&amp;ct=35" target="_blank">this page</a>.
        </p>
        <p>
          <a target="_blank"  rel="noopener noreferrer" href="https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/">
            <img height="75" alt="Eat it to beat it" src="/img/EatItToBeatIt_trans.png" />
          </a>
        </p>
      </div>
    );
  }
}

export default connect()(About);
