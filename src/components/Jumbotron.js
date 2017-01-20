/**
 * Created by Chris Dorward on 18/01/2017
 * components/Jumbotron
 */

import React from 'react';
import { Link } from 'react-router';

function Jumbotron(props) {
  //console.log(props);
  const pageTitle = props.page.posts.description || 'no title';
  // Jumbotron(props) console.log(props);
  return (
      <div className="template-jumbotron jumbotron">
          <h2>{ pageTitle }</h2>
          <a  rel='noopener noreferrer' href="http://api.healthylunchbox.com.au/wp-admin/post-new.php?post_type=recipe" target="_blank" className="btn btn-danger">
            Add a recipe</a>
      </div>
  );
}

Jumbotron.propTypes = {
};

export default Jumbotron;
