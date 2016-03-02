import React from 'react-native';
import { Provider } from 'react-redux';
import createStore from '../store/configureStore';

import App from './App';

const store = createStore();

const Root = () => {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}

export default Root;
