

export const createComment = comment => {

  return $.ajax({
    type: 'POST',
    url: '/api/comments',
    data: { comment } //Needs to match
  });

}

export const destroyComment = (commentId) => {

  return $.ajax({
    type: 'DELETE',
    url: `/api/comments/${commentId}`
  })
};

export const getComments = () => {

  return $.ajax ({  
    type: 'GET',
    url: '/api/comments'
  })
};

export const getComment = id => {

  return $.ajax ({  
    type: 'GET',
    url: `/api/comments/${id}`
  })
};