import { fromJS } from 'immutable';
import parseConfig from './parse.config.js';

const defaultOptions = fromJS({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...parseConfig,
  },
});

const BASE_URL = 'https://api.parse.com/1';

/**
 * Wrapper for fetch API, unwraps ImmutableJS configuration
 *
 * @param {String} endpoint The endpoint we wish to hit
 * @param {Object} _options ImmutableJS Map configuration object
 * @return {Promise} The fetch promise
 */
function fetchr(endpoint, _options = defaultOptions) {
  const options = _options.toJS();

  return fetch(`${ BASE_URL }${ endpoint }`, options)
          .then(checkStatus)
          .then(res => res.json());
}

/**
 * Reads the return status of a request, and throws an error if it is a bad
 * response.
 *
 * @param {Object} response Fetch Response object
 * @return {Object} Response object or error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Makes a GET request using fetch
 *
 * @param {String} endpoint The endpoint we wish to hit
 * @param {Object} config Configuration object
 * @return {Promise} The fetch promise
 */
export function get(endpoint, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'GET');

  return fetchr(endpoint, options);
}

/**
 * Makes a POST request using fetch
 *
 * @param {String} endpoint The endpoint we wish to hit
 * @param {Object} body The data to pass to the API
 * @param {Object} config Configuration object
 * @return {Promise} The fetch promise
 */
export function post(endpoint, body = {}, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'POST')
                                .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

/**
 * Makes a PUT request using fetch
 *
 * @param {String} endpoint The endpoint we wish to hit
 * @param {Object} body The data to pass to the API
 * @param {Object} config Configuration object
 * @return {Promise} The fetch promise
 */
export function put(endpoint, body = {}, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'PUT')
                                .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

/**
 * Makes a DELETE request using fetch
 *
 * @param {String} endpoint The endpoint we wish to hit
 * @param {Object} config Configuration object
 * @return {Promise} The fetch promise
 */
export function destroy(endpoint, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'DELETE');

  return fetchr(endpoint, options);
}
