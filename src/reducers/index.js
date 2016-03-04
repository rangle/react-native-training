import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import create from './create';
import matches from './matches';
import navigator from './navigator';
import session from './session';
import topics from './topics';

const rootReducer = combineReducers({
  create,
  matches,
  navigator,
  session,
  topics,
  form: formReducer,
});

export default rootReducer;
