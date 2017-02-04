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
        <div className="row">

          <div className="raised-page" >
            <h1>{cms.app.data.about.post.post_title}</h1>
            <div dangerouslySetInnerHTML={this.makeMarkup()} />
          </div>

        </div>

        <div className="row margin-top-25">
          {editBtn}
        </div>

    </div>
    );
  }
}

export default About;
