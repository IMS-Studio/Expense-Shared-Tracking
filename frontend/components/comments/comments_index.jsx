import React from 'react';
import CommentBox from './comment_show';
import CommentForm from './comment_form';


class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
    

  }
  
  // componentWillMount() {
  //   this.props.fetchComments();
  // };

  

  render () {
    const { billId, curUser, addComment, commentIdList, commentList, deleteComment, allUsers } = this.props;
    if (!billId || !commentIdList || !commentList) {
      return null
    }
    // window.commentIdList = commentIdList
   
    return (
      <div className='comments-index-container'>
        Comments
         <ul>
            {
              commentIdList.map(commentId => ( 
                  <li key={commentId}>

                    <CommentBox 
                      commentId={commentId}
                      commentList={commentList}
                      deleteComment={deleteComment}
                      allUsers={allUsers}
                      curUser={curUser}
                    />
        
                  </li>
          
          ))
        }
        </ul>
        <CommentForm 
          billId={billId}
          curUser={curUser}
          addComment={addComment}
        />
      </div>
    )
  }
}

export default CommentsIndex;