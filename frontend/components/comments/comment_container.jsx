import React from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments, deleteComment } from '../../actions/comment_action';
import CommentsIndex from './comments_index';


const mSTP = (state, ownProps) => {
  const commentList = state.entities.comments;
  const curUser = state.session.id;
  


  return {
    commentIdList: state.entities.bills[ownProps.billId].commentIds,
    commentList,
    curUser
  }
}

const mDTP = dispatch => {

  return {
    addComment: (comment) => dispatch(addComment(comment)),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentsIndex);