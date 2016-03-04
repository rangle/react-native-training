import { fromJS } from 'immutable';
import Parse from 'parse/react-native';

import * as users from '../api/users';

export const USER_SESSION_SYNC = '@@devMatchNative/USER_SESSION_SYNC';
export const LOGIN_PENDING = '@@reactTraining/LOGIN_PENDING';
export const LOGIN_SUCCESS = '@@reactTraining/LOGIN_SUCCESS';
export const LOGIN_ERROR = '@@reactTraining/LOGIN_ERROR';
export const REGISTER_PENDING = '@@reactTraining/REGISTER_PENDING';
export const REGISTER_SUCCESS = '@@reactTraining/REGISTER_SUCCESS';
export const REGISTER_ERROR = '@@reactTraining/REGISTER_ERROR';
export const LOGOUT = '@@reactTraining/LOGOUT';

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  code: null,
  message: false,
  authenticated: false,
  username: null,
  id: null,
  displayName: null,
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case USER_SESSION_SYNC:
      return state.merge(action.payload);

    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return state.set('pending', true)
                  .set('hasError', false);

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        authenticated: true,
        ...action.payload,
      }));

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return state.merge(fromJS({
        pending: false,
        hasError: true,
        authenticated: false,
        ...action.payload,
      }));

    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export function login({ username, password }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING });

    return users.login(username, password)
      .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      }))
      .then(null, err => dispatch({
        type: LOGIN_ERROR,
        payload: err,
      }));
  };
}

export function logout() {
  return (dispatch) => {
    return users.logout()
      .then(dispatch({ type: LOGOUT }));
  };
}

export function register({ username, password, email, displayName }) {
  return (dispatch) => {
    dispatch({ type: REGISTER_PENDING });

    return users.create(username, password, email, displayName)
      .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      }))
      .then(null, err => dispatch({
        type: REGISTER_ERROR,
        payload: err,
      }));
  };
}

export default sessionReducer;
