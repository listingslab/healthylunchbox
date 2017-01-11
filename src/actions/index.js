/**
 * Created by Chris D on 17/12/2016.
 * Redux actions
 */

/*
 * action types
 */
export const UPDATE_DIMENSIONS = 'UPDATE_DIMENSIONS';

// eslint-disable-next-line arrow-body-style
export const updateDimensions = (vergeViewport) => {
  return {
    type: UPDATE_DIMENSIONS,
    vergeViewport
  };
};
