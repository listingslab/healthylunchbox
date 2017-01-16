/**
 * Created by Chris Dorward on 16/01/2017
 * Actions
 */

import { CALL_API } from '../middleware/api';

export const HELLO_REQUEST = 'HELLO_REQUEST';
export const HELLO_SUCCESS = 'HELLO_SUCCESS';
export const HELLO_FAILURE = 'HELLO_FAILURE';

// Fetches an initial response from the API to check it's working
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchHello = () => ({
  [CALL_API]: {
    types: [HELLO_REQUEST, HELLO_SUCCESS, HELLO_FAILURE],
    endpoint: 'hello'
  }
});

// Fetches an initial response unless it is cached.
// Relies on Redux Thunk middleware.
export const loadHello = () => (dispatch, getState) => {
  if (getState().hello) {
    return null;
  }
  return dispatch(fetchHello());
};
