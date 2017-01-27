/**
 * Created by Chris Dorward on 16/01/2017
 * templates/Home/Home
 */

import React, { Component } from 'react';
import $ from 'jquery';
import Hero from '../../components/Hero/Hero';
import Tile from '../../components/Tile/Tile';
import Message from '../../components/Message/Message';

class Home extends Component {
  componentDidMount() {
    this.hideMessage();
    this.fadeInMessage();
  }

  fadeInMessage() {
    $('#message').fadeIn();
  }

  hideMessage() {
    $('#message').hide();
  }

  showMessage() {
    $('#message').html();
    $('#message').fadeOut(2000);
  }

  render() {
    console.log('HOME RENDER');
    const featuredItemsArr = [];
    const featuredItems = [];
    for (let i = 0; i < featuredItemsArr.length; i += 1) {
      featuredItems.push(<Tile
        key={`featured_${i}`}
        editLink={''}
        link={''}
        header={''}
        shortDescription={''}
        btnType={''}
      />);
    }
    const cookieNumber = 'HLB12345678';
    // const message = '<p>You have been assigned cookie number <strong>{cookieNumber}</strong>.</p> <p> If you do not wish to keep cookies on your device for this site, click here.</p>';
    const message = `<p>You are assigned cookie  <strong>${cookieNumber}</strong></p>
  <p>Please quote this as a reference if you have any problems of issues with this website.</p>`;
  // <p>If you wish to turn offthese messages, click here.</p>';
    const showDismiss = true;
    return (
      <div className="home container">
        <div id="message">
          <Message
            type="success"
            showDismiss={showDismiss}
            title="Hello new user"
            message={message}

             />
        </div>
        <Hero
          editLink={''}
          hero={''}
        />
      <div className="row">
          {featuredItems}
        </div>
      </div>
    );
  }
}

export default Home;
