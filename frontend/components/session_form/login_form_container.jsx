import { connect } from 'react-redux';
import React from 'react';
import { login, receiveErrors, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { requestBills } from "../../actions/bill_actions";
import { fetchComments } from '../../actions/comment_action';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mDTP = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    receiveErrors: error => dispatch(receiveError(error)),
    clearErrors: () => dispatch(clearErrors()),
    requestBills: () => dispatch(requestBills()),
    fetchComments: () => dispatch(fetchComments())

  };
};

export default connect(mSTP, mDTP)(LoginForm);