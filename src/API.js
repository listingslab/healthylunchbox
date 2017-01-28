/**
 * Created by Chris Dorward on 28/01/2017
 * API
 */

import $ from 'jquery';

export default class API {

  constructor(apiRoute) {
    this.apiBaseUrl = 'http://api.healthylunchbox.com.au/wp-json/hlbapi/';
    this.apiUrl = `${this.apiBaseUrl}${apiRoute}`;
    this.homeData = false;
    this.state = {
      isLoaded: false,
      isFetching: false,
      cmsData: false
    };
  }

  getDataIfNeeded(apiRoute, callBack) {
    console.log(`Do we need data for "${apiRoute}"`);
    if (!this.homeData) {
      console.log('Yes. Yes we do. let us load it with jQuery');
      $.getJSON(`${this.apiBaseUrl}${apiRoute}`, callBack);
    }
  }
}
