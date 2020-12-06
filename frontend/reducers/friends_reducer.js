import { RECEIVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS, REMOVE_FRIENDSHIP } from '../actions/friend_actions'
// import { RECEIVE_ALL_USERS } from "../actions/session_actions";


const friendsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      return Object.assign({}, newState, {[action.friend.id]: action.friend})
    case RECEIVE_FRIENDSHIPS:
      return action.friends;
    case REMOVE_FRIENDSHIP:
      return {}
    default:
      return state;
  }

}

export default friendsReducer;