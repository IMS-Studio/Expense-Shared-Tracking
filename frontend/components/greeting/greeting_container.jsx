import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { receiveAllUsers } from '../../actions/session_actions';


const mSTP = ( { session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


const mDTP = dispatch => {
  
  return {
  logout: () => dispatch(logout()),
  receiveAllUsers: () => dispatch(receiveAllUsers()),

  }
};



export default connect(mSTP,mDTP)(Greeting);

