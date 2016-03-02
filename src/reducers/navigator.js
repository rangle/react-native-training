import { fromJS } from 'immutable';

export const GOTO_TAB = '@@devMatchNative/GOTO_TAB';

const initialState = fromJS({
  selectedTab: 'topics',
});

function navigatorReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GOTO_TAB:
      return state.set('selectedTab', action.payload);

    default:
      return state;
  }
}

export function gotoTab(tab) {
  return {
    type: GOTO_TAB,
    payload: tab,
  };
}

export default navigatorReducer;
