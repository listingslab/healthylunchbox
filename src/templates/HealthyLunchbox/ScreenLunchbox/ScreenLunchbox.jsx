/**
 * Created by Chris Dorward on 04/02/2017
 * components/ScreenLunchbox/ScreenLunchbox
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ScreenLunchbox(props) {
  const text = props.text || 'default';

  const alertMessage = () => {
    alert('ok');
  };

  return (
    <div className="screen-lunchbox">
      <div className="container">
          <div className="row">
            <div className="builder-screen-1">
                <div className="builder-screen-1-lunchbox">
                <div className="row builder-1-row-responsive">
                  <div className="col-xs-8 builder-screen-1-item">

                      <div
                        onClick={alertMessage}
                        className="cereals row builder-1-bottom-dash builder-1-right-dash builder-screen-1-tile">
                        <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
                          <img
                            src="/img/builder/bread-icon.png"
                            className="builder-screen-1-img builder-screen-1-align img-responsive"
                        /></div>
                        <div className="col-xs-7 col-md-7 builder-screen-1-align">
                          <h2>Breads &amp;
                        <br /> Cereals</h2></div>
                      </div>


                      <div
                        onClick={alertMessage}
                        className="vegies row builder-1-right-dash builder-screen-1-tile">
                        <div className="col-xs-5 col-md-5 builder-screen-1-tile-center">
                          <img
                            src="/img/builder/carrot-icon.png"
                            alt="Vegies and Salad"
                            className="builder-screen-1-img builder-screen-1-align img-responsive"
                          />
                        </div>
                        <div className="col-xs-7 col-md-7 builder-screen-1-align">
                          <h2>Vegies &amp;<br /> Salad</h2>
                        </div>
                      </div>


          </div>


                        <div
                          onClick={alertMessage}
                          className="water col-xs-4 builder-screen-1-item">
                            <div className="row builder-screen-1-tile builder-screen-1-tile-center">
                              <img
                                src="/img/builder/water-icon.png"
                                alt="Water"
                                className="builder-screen-1-img img-responsive"
                              />
                              <h2>Water</h2>
                            </div>
                        </div>


            </div>


                <div className="row row-eq-height builder-1-row-responsive">
                  <div
                    onClick={alertMessage}
                    className="hlb-border meat col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center" >
                    <img
                      alt="Meats and Alternatives"
                      src="/img/builder/meat-icon.png"
                      className="builder-screen-1-img img-responsive" />
                    <h2>Meats &amp;<br /> Alternatives</h2>
                  </div>



                  <div className="col-xs-4 builder-1-right-dash builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
                    <img src="/img/builder/dairy-icon.png" className="builder-screen-1-img img-responsive" />
                    <h2>Dairy </h2>
                  </div>
                  <div className="col-xs-4 builder-1-top-dash builder-screen-1-tile builder-screen-1-tile-center">
                    <img src="/img/builder/fruit-icon.png" className="builder-screen-1-img img-responsive" />
                    <h2>Fruits</h2>
                  </div>
                </div>
                <div className="border-1-item-tab"></div>
                 </div>
            </div>
                <div className="border-1-prompt-box">
              <h4>Let's start building!</h4>
              <h3>Select any food group to begin.</h3>
              </div>
          </div>
        </div>
      </div>
  );
}

ScreenLunchbox.propTypes = {
  text: PropTypes.string
};

export default ScreenLunchbox;
