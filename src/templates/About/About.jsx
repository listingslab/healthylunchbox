/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 18/01/2017
 * templates/About/About
 */

import React, { Component, PropTypes } from 'react';
import EditLink from '../../components/EditLink/EditLink';

class About extends Component {
  static propTypes = {
    input: PropTypes.string
  }

  makeMarkup() {
    return { __html: cms.app.data.about.post.post_content };
  }

  render() {
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={cms.app.data.about.editUrl}
        />
      );
    }
    return (
      <div className="container">
        {editBtn}
        <div className="raised-page" >
          <h1>{cms.app.data.about.post.post_title}</h1>
          <div dangerouslySetInnerHTML={this.makeMarkup()} />
            <div className="text-center margin-top-25">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cancercouncil.com.au/cancer-prevention/diet-exercise/eat-it-to-beat-it/"
              >
                <img height="75" alt="Eat it to beat it" src="/img/EatItToBeatIt_trans.png" />
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
