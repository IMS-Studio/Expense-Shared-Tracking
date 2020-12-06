import { combineReducers } from 'redux';
import modal from './modal_reducer';
import billInfo from './billInfo_reducer';
import dashView from './dashboard_reducer';


export default combineReducers({
  modal,
  billInfo,
  dashView
});
