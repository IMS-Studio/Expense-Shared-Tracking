import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard/dashboard_container';
import ActivityContainer from './activity/activity_container';
import AllExpensesContainer from './all_expenses/all_expenses_container'
import Modal from './modal/modal_container';


const App = () => (
  <div>
    <Modal/>
    <header>
    </header>
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
      <ProtectedRoute exact path='/activity' component={ActivityContainer}/>
      <ProtectedRoute exact path='/all' component={AllExpensesContainer} />
    </Switch>
  </div>

);

export default App;
