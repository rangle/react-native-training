import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';

import rootReducer from '../reducers';

function configureStore(initialState = {}) {
  const createStoreEnhanced = compose(
    applyMiddleware(
      thunk,
      logger,
    ),
  )(createStore);

  return createStoreEnhanced(
    rootReducer,
    initialState,
  );
}

export default configureStore;
