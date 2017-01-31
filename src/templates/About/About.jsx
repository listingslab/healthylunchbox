/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 18/01/2017
 * templates/About/About
 */

import React, { Component, PropTypes } from 'react';

class About extends Component {
  static propTypes = {
    input: PropTypes.string
  }

  render() {
    return (
      <div className="template-about container">

        <div className="col-md-12 text-center template-about-links">
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

export default About;

/*
<ul className="react-motion-nav">
    <li><a href="/react-motion/demo0-simple-transition">Simple transition</a></li>
    <li><a href="/react-motion/demo3-todomvc-list-transition">Todomvc list transition</a></li>
    <li><a href="/react-motion/demo4-photo-gallery">Photo gallery</a></li>
    <li><a href="/react-motion/demo8-draggable-list">Draggable list</a></li>
  </ul>
*/
