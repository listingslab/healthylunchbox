/**
 * Created by Chris Dorward on 20/01/2017
 * reducers/index.js
 *
 * Redux Reducers
 * Actions describe the fact that something happened, but don't specify how the
 * application's state changes in response. This is the job of reducers.
 */

import { combineReducers } from 'redux';
import {
  SELECT_HLB, INVALIDATE_HLB,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions';

const selectedHLB = (state = 'home', action) => {
  switch (action.type) {
  case SELECT_HLB:
    return action.hlb;
  default:
    return state;
  }
};

const posts = (
state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
  case INVALIDATE_HLB:
    return {
      ...state,
      didInvalidate: true
    };
  case REQUEST_POSTS:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  case RECEIVE_POSTS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    };
  default:
    return state;
  }
};

const postsByHLB = (state = { }, action) => {
  switch (action.type) {
  case INVALIDATE_HLB:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    return {
      ...state,
      [action.hlb]: posts(state[action.hlb], action)
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  postsByHLB,
  selectedHLB
});

export default rootReducer;
