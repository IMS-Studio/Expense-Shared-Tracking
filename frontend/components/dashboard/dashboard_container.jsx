import React from 'react';
import { connect } from 'react-redux';
import { logout, receiveAllUsers } from '../../actions/session_actions';
import Dashboard from './dashboard_frame';
import { addFriend, requestFriends } from "../../actions/friend_actions";
import { requestBills } from "../../actions/bill_actions";
import { fetchComments } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';
import { openDashboard, openActivity, openExpenses } from '../../actions/dashboard_actions'


const mSTP = (state) => {
  
  const curUser = state.entities.users[state.session.id];
  // const curUserBillIds = curUser.billIds;
  // const bills = state.entities.bills;

  // let authorOwes = 0;
  // let authorOwed = 0;

  // curUserBillIds.forEach(billId => {
  //   if ((bills[billId].author_id === curUser.id && bills[billId].author_payor) || (bills[billId].author_id != curUser.id && !bills[billId].author_payor)) {
  //     authorOwes += (bills[billId].cost)
  //   } else {
  //     authorOwed += (bills[billId].cost)
  //   }
  // })

  return {
    user: state.entities.users[state.session.id],
    dashView: state.ui.dashView,
    curUser,
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    requestFriends: () => dispatch(requestFriends()),
    addFriend: (friend) => dispatch(addFriend(friend)),
    requestBills: () => dispatch(requestBills()),
    fetchComments: () => dispatch(fetchComments()),
    openModal: (modal, billInfo) => dispatch(openModal(modal, billInfo)),
    openDashboard: (dashboard) => dispatch(openDashboard(dashboard)),
    openActivity: (activity) => dispatch(openActivity(activity)),
    openExpenses: (expenses) => dispatch(openExpenses(expenses))
  };
};

export default connect(mSTP, mDTP)(Dashboard);