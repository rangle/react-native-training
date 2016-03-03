import { fromJS } from 'immutable';
import { LOCALSTORAGE_SYNC } from '../middleware/storage';
import { REQUEST } from '../middleware/request';

import * as users from '../api/users';

export const LOGIN_PENDING = '@@devMatchNative/LOGIN_PENDING';
export const LOGIN_SUCCESS = '@@devMatchNative/LOGIN_SUCCESS';
export const LOGIN_ERROR = '@@devMatchNative/LOGIN_ERROR';
export const LOGOUT_PENDING = '@@devMatchNative/LOGOUT_PENDING';
export const LOGOUT_SUCCESS = '@@devMatchNative/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = '@@devMatchNative/LOGOUT_ERROR';
export const REGISTER_PENDING = '@@devMatchNative/REGISTER_PENDING';
export const REGISTER_SUCCESS = '@@devMatchNative/REGISTER_SUCCESS';
export const REGISTER_ERROR = '@@devMatchNative/REGISTER_ERROR';

const initialState = fromJS({
  displayName: null,
  email: null,
  hasError: false,
  pending: false,
  sessionToken: null,
  username: null,
});

function sessionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOCALSTORAGE_SYNC:
      return state.merge(action.payload.session);

    case LOGOUT_PENDING:
    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return state.set('pending', true)
                  .set('hasError', false);

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        ...action.payload,
      }));

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return state.merge(fromJS({
        pending: false,
        hasError: true,
        ...action.payload,
      }));

    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      return initialState;

    default:
      return state;
  }
}

export function login() {
  return (dispatch, getState) => {
    const { username, password } = getState().form.login;

    return dispatch({
      [REQUEST]: {
        types: [
          LOGIN_PENDING,
          LOGIN_SUCCESS,
          LOGIN_ERROR,
        ],
        payload: {
          request: users.login(username.value, password.value),
        },
      }
    });
  };
}

export function logout() {
  return {
    [REQUEST]: {
      types: [
        LOGOUT_PENDING,
        LOGOUT_SUCCESS,
        LOGOUT_ERROR,
      ],
      payload: {
        request: users.logout(),
      },
    }
  };
}

export function register() {
  return (dispatch, getState) => {
    const { username, password, email, displayName } = getState().form.register;

    return dispatch({
      [REQUEST]: {
        types: [
          REGISTER_PENDING,
          REGISTER_SUCCESS,
          REGISTER_ERROR,
        ],
        payload: {
          request: users.register(username.value, password.value, email.value, displayName.value),
        },
      }
    });
  };
}

export default sessionReducer;
