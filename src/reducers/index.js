import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import navigator from './navigator';
import session from './session';

const rootReducer = combineReducers({
  navigator,
  session,
  form: formReducer,
});

export default rootReducer;
