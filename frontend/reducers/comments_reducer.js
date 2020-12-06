import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from '../actions/comment_action'


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign({}, newState, {[action.comment.id]: action.comment})
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;