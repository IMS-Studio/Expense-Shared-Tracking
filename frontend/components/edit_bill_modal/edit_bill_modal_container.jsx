import React from 'react';
import { connect } from 'react-redux';
// import { logout, receiveAllUsers } from '../../actions/session_actions';
import EditBillPage from './edit_bill_modal';
import { requestFriends, requestFriend } from "../../actions/friend_actions";
// import { requestBills } from "../../actions/bill_actions";
import { closeModal } from '../../actions/modal_actions';
import { addBill, updateBill } from '../../actions/bill_actions';



const mSTP = (state) => {
  return {
    friends: state.entities.friends,
    bills: state.entities.bills
  }
}

const mDTP = (dispatch) => {
  
  return {
    closeModal: () => dispatch(closeModal()),
    updateBill: (bill, id) => dispatch(updateBill(bill, id))
  };
};

export default connect(mSTP, mDTP)(EditBillPage);