/**
 * Created by Chris Dorward on 20/01/2017
 * actions/index.js
 *
 * Redux Actions are payloads of information that send data from your application
 * to your store. They are the only source of information for the store.
 * You send them to the store using store.dispatch().
 */

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_HLB = 'SELECT_HLB';
export const INVALIDATE_HLB = 'INVALIDATE_HLB';

export const selectHLB = hlb => ({
  type: SELECT_HLB,
  hlb
});

export const invalidateHLB = hlb => ({
  type: INVALIDATE_HLB,
  hlb
});

export const requestPosts = hlb => ({
  type: REQUEST_POSTS,
  hlb
});

export const receivePosts = (hlb, json) => ({
  type: RECEIVE_POSTS,
  hlb,
  posts: json,
  receivedAt: Date.now()
});

const fetchPosts = hlb => (dispatch) => {
  dispatch(requestPosts(hlb));
  const baseurl = 'http://api.healthylunchbox.com.au/wp-json/hlbapi/';
  const url = baseurl + hlb;
  console.log(`fetch > ${url}`);
  return fetch(url)
    .then(response => response.json())
    // .then(console.log('finished fetch'))
    .then(posts => dispatch(receivePosts(hlb, posts)));
};

const shouldFetchPosts = (state, hlb) => {
  const posts = state.postsByHLB[hlb];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

// eslint-disable-next-line consistent-return
export const fetchPostsIfNeeded = hlb => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), hlb)) {
    return dispatch(fetchPosts(hlb));
  }
};
