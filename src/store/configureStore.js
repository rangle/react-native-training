import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { storageMiddleware, storageEnhancer } from '../middleware/storage';
import logger from '../middleware/logger';
import request from '../middleware/request';

import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from '../reducers/session';

import rootReducer from '../reducers';

function configureStore(initialState = {}) {
  const createStoreEnhanced = compose(
    storageEnhancer(),
    applyMiddleware(
      request,
      thunk,
      storageMiddleware({
        whitelist: [
          LOGIN_SUCCESS,
          REGISTER_SUCCESS,
          LOGOUT_SUCCESS,
          LOGOUT_ERROR,
        ],
        slicer: (state) => {
          return {
            session: state.session.toJS(),
          };
        },
      }),
      logger,
    ),
  )(createStore);

  return createStoreEnhanced(
    rootReducer,
    initialState,
  );
}

export default configureStore;
