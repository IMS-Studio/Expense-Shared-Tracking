import React from 'react';
import { connect } from 'react-redux';
// import { logout, receiveAllUsers } from '../../actions/session_actions';
import BillPage from './bill_modal';
import { requestFriends, requestFriend } from "../../actions/friend_actions";
// import { requestBills } from "../../actions/bill_actions";
import { closeModal } from '../../actions/modal_actions';
import { addBill } from '../../actions/bill_actions'



const mSTP = (state) => {
  return {
    friends: state.entities.friends,
  }
}

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    addBill: (bill) => dispatch(addBill(bill))
  };
};

export default connect(mSTP, mDTP)(BillPage);