import immutableToJS from '../utils/immutableToJS';
import createLogger from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    const blacklist = [
      'redux-form/BLUR',
      'redux-form/CHANGE',
      'redux-form/FOCUS',
      'redux-form/TOUCH',
      'redux-form/DESTROY',
    ];

    return blacklist.every(i => type !== i);
  },
});

export default logger;
