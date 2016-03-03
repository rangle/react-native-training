import { AsyncStorage } from 'react-native';
import { fromJS } from 'immutable';
import invariant from 'invariant';

export const LOCALSTORAGE_SYNC = '@@devMatchNative/LOCALSTORAGE_SYNC';
export const STORAGE_KEY = '@@devMatchNative/STORAGE_KEY';

/**
 * This will attempt to read localstorage, and then dispatch an action
 * containing the value that has been read from localstorage. It is up
 * to your reducer implementation to handle this action
 *
 * @param {Function} dispatch Store dispatch function
 * @return {undefined} undefined
 */
async function _loadInitialState(dispatch) {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    let immutableState = {};

    if (value !== null) {
      const state = JSON.parse(value);

      Object.keys(state).map(i => {
        immutableState[i] = fromJS(state[i]);
      });
    }

    dispatch({
      type: LOCALSTORAGE_SYNC,
      payload: immutableState,
    });
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}

/**
 * This function will attempt to save your selected reducer state to
 * localstorage.
 *
 * @param {Object} selectedValue The object to save to localstorage
 * @return {undefined} undefined
 */
async function _onValueChange(selectedValue) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, selectedValue);

    console.log('Saved selection to disk: ' + selectedValue);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}

/**
 * A simple middleware which will listen for the provided action types, and
 * when they occur, will save the slice of state to localstorage.
 *
 * @param {Function} options.dispatch store.dispatch function
 * @param {Function} options.getState store.getState function
 * @return {Object} Current action
 */
export const storageMiddleware = (config) => {
    const {
      whitelist,
      slicer,
    } = config;

  invariant(
    whitelist !== null && whitelist.length > 0,
    'Storage middleware expects an array of action types to listen for the whitelist property'
  );

  invariant(
    slicer !== null && typeof slicer === 'function',
    'Storage middleware expects a function for the slicer property'
  );

  return ({ dispatch, getState }) => next => action => {
    next(action);

    const { type } = action;

    if (whitelist.some(i => i === type)) {
      _onValueChange(JSON.stringify(slicer(getState()))).done();
    }

    return action;
  }
};

/**
 * A simple store enhancer which will hydrate the store with your localstorage
 * data.
 *
 * @param {Object} options Configuration object
 * @return {Object} Enhanced store
 */
export function storageEnhancer(options) {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);

    _loadInitialState(store.dispatch);

    return {
      ...store,
    };
  };
}
