/**
 * Created by Chris D on 17/12/2016.
 * Initialise Redux store with this data
 */

const INITIAL_STATE = {
  userData: {
    isLoggedIn: true,
    username: 'a.doctor',
    name: {
      given: 'Kent',
      family: 'Clark',
      prefix: '',
      suffix: ''
    },
    isFetching: false,
    error: null
  }
};
export default INITIAL_STATE;
