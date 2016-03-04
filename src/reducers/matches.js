import { fromJS } from 'immutable';

export const MATCHES_START_POLL = '@@reactTraining/MATCHES_START_POLL';
export const MATCHES_STOP_POLL = '@@reactTraining/MATCHES_STOP_POLL';
export const MATCHES_PENDING = '@@reactTraining/MATCHES_PENDING';
export const MATCHES_SUCCESS = '@@reactTraining/MATCHES_SUCCESS';
export const MATCHES_ERROR = '@@reactTraining/MATCHES_ERROR';
export const VIEW_LATEST_MATCHES = '@@reactTraining/VIEW_LATEST_MATCHES';

const INITIAL_STATE = fromJS({
  pending: false,
  hasError: false,
  message: false,
  code: null,
  polling: false,
  result: [],
});

function createReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case MATCHES_PENDING:
      return state.set('pending', true)
                  .set('hasError', false);

    case MATCHES_SUCCESS:
      return state.merge(fromJS({
        pending: false,
        showSuccess: true,
        ...action.payload,
      }));

    case MATCHES_ERROR:
      return state.merge(fromJS({
        hasError: true,
        pending: false,
        ...action.payload,
      }));

    case MATCHES_START_POLL:
      return state.set('polling', true);

    case MATCHES_STOP_POLL:
      return state.set('polling', false);

    default:
      return state;
  }
}

export function viewMatches() {
  return { type: VIEW_LATEST_MATCHES };
}

export function matchesPending() {
  return { type: MATCHES_PENDING };
}

export function matchesSuccess(res) {
  return { type: MATCHES_SUCCESS, payload: res };
}

export function matchesError(err) {
  return { type: MATCHES_ERROR, payload: err };
}

export function startMatchesPolling() {
  return { type: MATCHES_START_POLL };
}

export function stopMatchesPolling() {
  return { type: MATCHES_STOP_POLL };
}

export default createReducer;
