import React from 'react';
import { connect } from 'react-redux';
import { logout, receiveAllUsers } from '../../actions/session_actions';
import DashPage from './dashboard_page';
import { requestBills } from "../../actions/bill_actions";
import { openModal } from '../../actions/modal_actions';
import { openDashboard, openActivity, openExpenses } from '../../actions/dashboard_actions'


const mSTP = (state) => {
  const curUser = state.entities.users[state.session.id];
  const curUserBillIds = curUser.billIds;
  const bills = state.entities.bills;
  let authorOwes = 0;
  let authorOwed = 0;

  curUserBillIds.forEach(billId => {
    if ((bills[billId].author_id === curUser.id && bills[billId].author_payor) || (bills[billId].author_id != curUser.id && !bills[billId].author_payor)) {
      authorOwes += parseFloat(bills[billId].cost)
    } else {
      authorOwed += parseFloat(bills[billId].cost)
    }
  })

  return {
    user: state.entities.users[state.session.id],
    curUser,
    authorOwes,
    authorOwed
  }
}

// const mDTP = (dispatch) => {
//   return {
//     logout: () => dispatch(logout()),
//     receiveAllUsers: () => dispatch(receiveAllUsers()),
//     requestFriends: () => dispatch(requestFriends()),
//     addFriend: (friend) => dispatch(addFriend(friend)),
//     requestBills: () => dispatch(requestBills()),
//     fetchComments: () => dispatch(fetchComments()),
//     openModal: (modal, billInfo) => dispatch(openModal(modal, billInfo)),
//     openDashboard: (dashboard) => dispatch(openDashboard(dashboard)),
//     openActivity: (activity) => dispatch(openActivity(activity)),
//     openExpenses: (expenses) => dispatch(openExpenses(expenses))
//   };
// };

export default connect(mSTP, null)(DashPage);