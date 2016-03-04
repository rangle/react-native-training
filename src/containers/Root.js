import Parse from 'parse/react-native';
import React from 'react-native';
import { Provider } from 'react-redux';
import createStore from '../store/configureStore';
import { USER_SESSION_SYNC } from '../reducers/session';

import Router from './Router';

const store = createStore();

// Because React Native uses asynchronous storage, we need to read our user
// session and delay the app from initializing until this is resolved. We can
// do this by having our components wait until the USER_SESSION_SYNC event is
// emitted.
Parse.User.currentAsync()
  .then(user => {
    store.dispatch({
      type: USER_SESSION_SYNC,
      payload: {
        authenticated: user ? user.authenticated() : false,
        username: user ? user.get('username') : null,
        id: user ? user.id : null,
        displayName: user ? user.get('displayName') : null,
      },
    });
  });

const Root = () => {
  return (
    <Provider store={ store }>
      <Router />
    </Provider>
  );
}

export default Root;
