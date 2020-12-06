import React from 'react';


const CommentBox = ({allUsers, curUser, commentId, commentList, deleteComment}) => {


  if (!commentId || !commentList) {
    return null;
  }
  
  
    return (
      <div className='comment-show-box'>
        <div className='comment-show-title'>{allUsers[commentList[commentId].author_id].name} </div>
        <br/>
 
        <div className='comment-show-body'>{commentList[commentId].text_body}</div>

        <button className={(curUser === commentList[commentId].author_id) ? 'is-comment-author' : 'not-comment-author'} onClick={() => deleteComment(commentId)}>X</button>
      

      </div>



    )
  }


export default CommentBox;