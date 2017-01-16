/**
 * Created by Chris Dorward on 16/01/2017
 * Custom API Middleware
 */

const API_ROOT = 'http://localhost/';

const callApi = (endpoint, schema) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        // const camelizedJson = camelizeKeys(json);
        // const nextPageUrl = getNextPageUrl(response);

        return 'ok';
      })
    );
};
