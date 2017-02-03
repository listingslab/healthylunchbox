/* global editor */
/* global cms */
/**
 * Created by Chris Dorward on 31/01/2017
 * templates/Tips/Tips
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import EditLink from '../../components/EditLink/EditLink';
import CardCategory from '../../components/CardCategory/CardCategory';
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
      const key = `cardcat_${i}`;
      // console.log(categories[i].route);
      categoriesArr.push(
        <div
          key={key}
          className="col-md-6"
        >
          <CardCategory
            route={categories[i].route}
            title={categories[i].title || ''}
            subTitle={categories[i].subTitle || ''}
            numberItems={10}
            colour="green"
            itemType="tip"
            image={categories[i].image}
          />
        </div>
      );
    }
    return (
      <div className="container">
        {editBtn}
          <div className="row" >
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={this.makeMarkup()} />
          </div>
          <div className="row margin-top-25" >
            {categoriesArr}
          </div>
      </div>
    );
  }
}

export default Tips;
