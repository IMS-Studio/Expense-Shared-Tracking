import * as commentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const receiveAllComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const addComment = comment => dispatch => {

  return commentApiUtil.createComment(comment)
    .then ((comment) => dispatch(receiveComment(comment)))

}

export const fetchComment = commentId => dispatch => {

  return commentApiUtil.getComment(commentId)
    .then(commentId => dispatch(receiveComment(commentId)))
}

export const fetchComments = () => dispatch => {

  return commentApiUtil.getComments()
    .then((comments) => dispatch(receiveAllComments(comments)))
}

export const deleteComment = commentId => dispatch => {

  return commentApiUtil.destroyComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
}

