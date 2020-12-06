import { connect } from 'react-redux';
import React from 'react';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { requestBills } from "../../actions/bill_actions";
import { fetchComments } from '../../actions/comment_action';


const mSTP = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: 'signup'
  }

}

const mDTP = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: logUser => dispatch(login(logUser)),
    requestBills: () => dispatch(requestBills()),
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(mSTP, mDTP)(SignupForm);