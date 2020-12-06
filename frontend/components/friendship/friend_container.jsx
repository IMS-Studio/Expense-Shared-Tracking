import { connect } from 'react-redux';
import React from 'react';
import { addFriend, removeFriend } from '../../actions/friend_actions';
import FriendIndex from './friend_index';
import { receiveAllUsers } from '../../actions/session_actions';

const mSTP = state => {

  const curUser = state.entities.users[state.session.id] 
  const friends = curUser.friendIds
  const allUsers = state.entities.users
  
  return {
      friends,
      allUsers
  }
}


const mDTP = dispatch => {
  
  return {
    addFriend: friend => dispatch(addFriend(friend)),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
  }
}

export default connect(mSTP, mDTP)(FriendIndex)

// get pojos of servers