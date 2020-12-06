import {OPEN_DASHBOARD, OPEN_ACTIVITY, OPEN_EXPENSES} from '../actions/dashboard_actions';

export default function dashboardReducer(state = null, action) {
  switch (action.type) {
    case OPEN_DASHBOARD:
      return action.dashboard;
    case OPEN_ACTIVITY:
      return action.activity;
    case OPEN_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
}