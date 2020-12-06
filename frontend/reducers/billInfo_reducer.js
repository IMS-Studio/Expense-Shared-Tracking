import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

export default function billInfoReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.billInfo
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}