/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Tips/Tips
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import EditLink from '../../components/EditLink/EditLink';
import './Tips.scss';

class Tips extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      taxonomy: 'tips'
    };
  }

  makeMarkup(){
    return { __html: cms.app.data.tips.post.post_content };
  }

  render() {
    const title = cms.app.data.tips.post.post_title || '';
    let editBtn = null;
    if (editor) {
      editBtn = (
        <EditLink
          editUrl={cms.app.data.tips.editUrl || ''}
        />
      );
    }
    const categoriesArr = [];
    const categories = cms.app.data.tips.categories;

    for (let i = 0; i < categories.length; i += 1) {
      const catKey = `cat_${i}`;
      // console.log(categories[i].route);
      categoriesArr.push(
        <div
          key={catKey}
          className="tip col-sm-12 col-md-6 col-lg-4"
        >
          <Link
            to={categories[i].route}
            className="btn btn-warning tip-btn"
          >
            <h3>{categories[i].title || ''}</h3>
            <p>{categories[i].subTitle || ''}</p>
          </Link>
        </div>
      );
    }
    return (
      <div className="container">
        {editBtn}
          <div className="raised-page" >
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={this.makeMarkup()} />
          </div>
          <div className="margin-top-25" >
            {categoriesArr}
          </div>
      </div>
    );
  }
}

export default Tips;
