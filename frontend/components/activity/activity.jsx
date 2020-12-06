import React from 'react';
import { Link } from 'react-router-dom';

class Activity extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.requestBills();
    this.props.receiveAllUsers();
  }
  
  render () {
    const { allUsers, bills, curUser, curUserBillIds } = this.props;
    window.allUsers = allUsers;
    window.bills = bills;
    window.curUserbillIds = curUserBillIds;
    window.curUser = curUser;

    if (!curUserBillIds || !bills) {
      return null
    }


    return (
      <div className='recent-activity-main-container'>
        <ul>
            {
              (curUserBillIds.length != 0) ?
                curUserBillIds.map(billId => (
                  <li key={ billId } >
                    <button className='activity-item'>
                  {curUser.id === bills[billId].author_id ? 'You': allUsers[bills[billId].author_id].name} added "{bills[billId].description}."
                  <br />
                 
                  
                  {(curUser.id === bills[billId].author_id && bills[billId].author_payor === true) ? <div className='activity-payor'>You owe ${bills[billId].cost}</div> : <div className='activity-payee'>You get back ${bills[billId].cost}</div>}


                  
                    </button>

                  
                  </li>
                  
                  ))
                  :
                  <p>No Bills Found</p>
                }
        </ul>
      </div>
    )


  }

  



};

export default Activity;