export const createFriend = friend => {
  debugger
  return $.ajax({
    type: 'POST',
    url: '/api/friends',
    data: { friend }  //Pulling from backend
  })
};

export const destroyFriend = () => {
  return $.ajax({
    type: 'DELETE',
    url: '/api/friends',
  })
};

export const getFriend = id => {
  ////
  return $.ajax ({  
    type: 'GET',
    url: `/api/friends/${id}`
  })
};

export const getFriends = () => {

  return $.ajax ({  
    type: 'GET',
    url: '/api/friends'
  })
};