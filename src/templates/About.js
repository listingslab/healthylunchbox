/**
 * Created by Chris Dorward on 18/01/2017
 * templates/About
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContextualMenu from '../components/ContextualMenu';
import CategoriesHeader from '../components/CategoriesHeader';

class About extends Component {
  static propTypes = {
    location: PropTypes.any
  }

  render() {
    // const pathName = this.props.location.pathname;
    const title = 'About';
    return (
      <div className="template-about container">
        <ContextualMenu
          categories="cats"
          back=""
        />
        <CategoriesHeader
          header={title}
          shortDescription="Eating enough fruit and veg everyday will give your kids the energy and nutrients they need to learn and play, "
          url="/about"
        />

        <div className="col-md-4">
            <p>Eating enough fruit and veg everyday will give your kids the energy and
            nutrients they need to learn and play, and can help protect them against
            diseases including some forms of cancer. This popular 25-minute session
            is run by Cancer Council NSW.</p>
        </div>

        <div className="col-md-4">
          <ul>
            <li>New and exciting ideas for healthy lunch boxes your kids will love</li>
            <li>A show bag including a great healthy lunch box kit and planner</li>
            <li>Simple ways to get the whole family eating fruit and veg – if <em>you</em> eat
              healthy your kids are more likely to, too!</li>
          </ul>
        </div>

        <div className="col-md-4">
          <ul>
            <li>New and exciting ideas for healthy lunch boxes your kids will love</li>
            <li>A show bag including a great healthy lunch box kit and planner</li>
          </ul>
        </div>

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

export default connect()(About);

/*
<ul className="react-motion-nav">
    <li><a href="/react-motion/demo0-simple-transition">Simple transition</a></li>
    <li><a href="/react-motion/demo3-todomvc-list-transition">Todomvc list transition</a></li>
    <li><a href="/react-motion/demo4-photo-gallery">Photo gallery</a></li>
    <li><a href="/react-motion/demo8-draggable-list">Draggable list</a></li>
  </ul>
*/
