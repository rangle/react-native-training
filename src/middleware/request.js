import invariant from 'invariant';

export const REQUEST = '@@devMatchNative/REQUEST';

/**
 * This middleware will allow us to dispatch 'request' actions, which will
 * help reduce boilerplate when making API requests, it will also automagically
 * attach a session token to any request if it exists. To use this middleware,
 * write your actions as follows:
 *
 * export function loadItem(id) {
 *   return {
 *     [REQUEST]: {
 *       types: [
 *         LOAD_LOCATION_PENDING,
 *         LOAD_LOCATION_SUCCESS,
 *         LOAD_LOCATION_ERROR,
 *       ],
 *       payload: {
 *         request: getStore(id), // Reference to an API call
 *       },
 *     }
 *   };
 * }
 *
 *
 * @param {Function} options.dispatch store.dispatch function
 * @param {Function} options.getState store.getState function
 * @return {Promise} The request promise
 */
export default ({ dispatch, getState }) => next => action => {
  const callAPI = action[REQUEST];

  // If the action isn't a REQUEST action type, pass it along
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { types, payload, meta } = callAPI;

  // Provide some validation to make it easier to use
  invariant(
    Array.isArray(types) && types.length === 3,
    'The types property must be an array with 3 action types.'
  );

  invariant(
    types.every(type => typeof type === 'string'),
    'The provided types must be strings.'
  );

  invariant(
    payload && payload.request && typeof payload.request === 'function',
    'The payload must contain a request function.'
  );

  const { request, data } = payload;
  const [ PENDING, FULFILLED, REJECTED ] = types;

  // Dispatch a pending action, we can use this to show spinners
  dispatch({
    type: PENDING,
    ...data && { payload: data },
    ...meta && { meta },
  });

  // Attach the users current session token if it exists
  const config = {
    headers: {
      'X-Parse-Session-Token': getState().session.get('sessionToken', null),
    },
  };

  // Dispatch the success or error action
  return request(config).then(
    result => {
      return next({
        type: FULFILLED,
        payload: result,
        meta,
      });
    },
    error => {
      if (error && error.response && error.response.status === 401) {
        console.error('TODO: Handle unauthenticated user...');
      }

      console.error('API ERROR: ', error.response);

      return next({
        type: REJECTED,
        payload: error.response,
        meta,
      });
    }
  );
};
