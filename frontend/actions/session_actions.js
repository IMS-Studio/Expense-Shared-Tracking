import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}};

const logoutCurrentUser = () => {
  
  return{
  type: LOGOUT_CURRENT_USER,
}};

const receiveErrors = errors => {
  
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
}};

const receiveUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

export const signup = user => dispatch => {
  ////
  return SessionAPIUtil.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveErrors(err.responseJSON))))
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
  .then(user => (dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))))
};

export const logout = () => dispatch => {
  
  return SessionAPIUtil.logout()
    .then(user => (dispatch(logoutCurrentUser())))
};

// YOU WERE STUCK ON SESSION RETURNING NULL

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const receiveAllUsers = () => dispatch => {
  return SessionAPIUtil.fetchAllUsers()
    .then(users => {
      ////
      dispatch(receiveUsers(users))
    })
}
