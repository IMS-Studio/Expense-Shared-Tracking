import React from 'react';
import Navbar from '../nav_bar/navbar';
import FriendIndex from '../friendship/friend_index';
import FriendContainer from '../friendship/friend_container';
import openModal from '../../actions/modal_actions';
import FriendInviteBox from '../friendship/friend_invite_box_main';
import AllExpenses from '../all_expenses/all_expenses_container';
import Activity from '../activity/activity_container'
import DashPage from './dashboard_page_container'
import billModal from '../bill/bill_modal_container';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.openTheModal = this.openTheModal.bind(this);
  }

  componentDidMount() {
    this.props.receiveAllUsers();
    this.props.requestFriends();
    this.props.requestBills();
    this.props.fetchComments();
  }

  openTheModal() {
    this.props.openModal('bill', null)
  }

  currentView() {
    // e.preventDefault();
    // if (this.state.ui.dashView == undefined) {
    //   return null;
    // }


    switch (this.props.dashView) {
      case 'dashboard':
        return <DashPage />
        break;
      case 'expenses':

        return <AllExpenses />
        break;
      case 'activity':

        return <Activity />
        break;
      default:
        return <AllExpenses />
        break;

    }
  }



  render () {
    const { user, logout, curUser, addFriend } = this.props;
    let DashTitle;

    if (!user || !logout || !curUser || !addFriend) {
      return null;
    }



    return (
      <div>
        <Navbar
            // name={this.state.name}
            logout={this.props.logout}
        />

        <div className='dashboard-main'>
          <nav className='dashboard-main-nav-left'>
            <button className='dash-click' onClick={this.props.openDashboard}>Dashboard</button>
            <br/>
            <button className='dash-click' onClick={this.props.openActivity}>Recent activity</button>
            <br/>
            <button className='dash-click' onClick={this.props.openExpenses}>All expenses</button>




          {/* <Link to={'/dashboard'}><button type='button'> Dashboard</button></Link>
          <Link to={'/activity'}><button type='button'>Recent activity</button></Link>
          <Link to={'/all'}><button type='button'>All expenses</button></Link> */}
            <FriendContainer />
            <FriendInviteBox
              curUser={curUser}
              addFriend={addFriend}
            />
          </nav>
          <main className='dashboard-main-center'>


            <div className ='dashboard-main-center-top'>
              <label>{this.props.dashView}</label>
              <button className='expense-btn' onClick={this.openTheModal}>Add an expense</button>
              {/* <button className='settle-btn'>Settle up</button> */}
            </div>

            <div>
              {this.currentView()}
            </div>
          </main>
          <nav className='dashboard-main-nav-right'>
            <label>About Me</label>
            <ul className='dashboard-about-me-list'>
              <li><a href='https://linkedin.com/in/kevin-romano//'>Linkedin</a></li>
              <li><a href='https://github.com/IMS-Studio/'>Github</a></li>
              <li><a href='https://kevin-romano-portfolio.s-it-e.com/'>Personal</a></li>


            </ul>
            {/* <label>Get Splitwise Pro!</label>
            <p className ='splitwise-purple-logo'></p>


            <p>Subscribe to Splitwise Pro for no ads, currency conversion, charts, search, and more.</p> */}


          </nav>

        </div>

      </div>
    )


  }


}

export default Dashboard;
