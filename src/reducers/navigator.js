import { fromJS } from 'immutable';
import { USER_SESSION_SYNC } from './session';

export const GOTO_TAB = '@@devMatchNative/GOTO_TAB';
export const SWITCH_PORTAL = '@@devMatchNative/SWITCH_PORTAL';

const initialState = fromJS({
  selectedTab: 'topics',
  showRegistration: false,
  initialized: false,
});

function navigatorReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_SESSION_SYNC:
      return state.set('initialized', true);

    case GOTO_TAB:
      return state.set('selectedTab', action.payload);

    case SWITCH_PORTAL:
      return state.set('showRegistration', action.payload);

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

export function switchPortal() {
  return (dispatch, getState) => {
    dispatch({
      type: SWITCH_PORTAL,
      payload: !getState().navigator.get('showRegistration'),
    });
  };
}

export default navigatorReducer;
