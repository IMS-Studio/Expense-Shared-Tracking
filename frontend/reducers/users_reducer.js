import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import { RECEIVE_FRIENDSHIP } from '../actions/friend_actions'

import { RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return action.users;
    
    case RECEIVE_FRIENDSHIP:


    
      for (const userId in newState) {
        
        if (!newState[userId].friendIds.includes(action.friend.id)) {
          newState[userId].friendIds.push(action.friend.id)
      }
    }
      
      return newState;
    case RECEIVE_BILL: 
      for (const userId in newState) {
        if (!newState[userId].billIds.includes(action.bill.id)) {
          newState[userId].billIds.push(action.bill.id)
      }
    }
      return newState;
    case REMOVE_BILL:
      
      for (const userId in newState) {
        if (newState.hasOwnProperty(userId)) {
          const user = newState[userId]
          user.billIds = user.billIds.filter((billId) => billId !== action.billId
        )
      }

    }
    return newState;
    default:
      return state;
  }
};

export default usersReducer;
