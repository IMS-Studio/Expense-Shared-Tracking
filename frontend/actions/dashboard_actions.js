export const OPEN_DASHBOARD = 'OPEN_DASHBOARD';
export const OPEN_ACTIVITY = 'OPEN_ACTIVITY';
export const OPEN_EXPENSES = 'OPEN_EXPENSES';
// export const OPEN_GROUP = 'OPEN_GROUP';
// export const OPEN_FRIEND = 'OPEN_FRIENDS';

export const openDashboard = () => {
  return {
    type: OPEN_DASHBOARD,
    dashboard: 'dashboard'
  }
};

export const openActivity = () => {
  return {
    type: OPEN_ACTIVITY,
    activity: 'activity'
  }
};

export const openExpenses = () => {
  return {
    type: OPEN_EXPENSES,
    expenses: 'expenses'
  }
};