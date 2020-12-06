import { RECEIVE_BILL, RECEIVE_ALL_BILLS, REMOVE_BILL } from '../actions/bill_actions'
import {RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action'


const billsReducer = (state = {}, action) => {
  
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BILL:
      return Object.assign({}, newState, {[action.bill.id]: action.bill})
    case RECEIVE_ALL_BILLS:
      return action.bills;
    case REMOVE_BILL:
      delete newState[action.billId];
      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.bill_id].commentIds.push(action.comment.id)
      return newState;
    case REMOVE_COMMENT:
      for (const billId in newState) {
        if (newState.hasOwnProperty(billId)) {
          const bill = newState[billId]
          bill.commentIds = bill.commentIds.filter((commentId) => commentId !== action.commentId
        )
      }
    }
      return newState;
    default:
      
      return state;
  }

}

export default billsReducer;