/**
 * Created by Chris D on 17/12/2016.
 * Reducer - the brain of Redux
 */

export default function (state = [], action) {
  switch (action.type) {

  case 'ADD_DIMENSIONS':
    return state.concat([action.text]);

  case 'ADD_W':
    return state.concat([action.text]);

  default:
    return state;
  }
}
