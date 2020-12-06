import React from 'react';
import openModal from '../../actions/modal_actions';
import billModal from '../bill/bill_modal_container';
import fetchBill from '../../actions/bill_actions';
import Modal from '../modal/modal_container';
import CommentsIndex from '../comments/comment_container';

class BillShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isButtonActive: false }
    this.toggleBillDisplay = this.toggleBillDisplay.bind(this)
    this.openTheModal = this.openTheModal.bind(this);
    this.displayDate = this.displayDate.bind(this);
  }

  toggleBillDisplay() {
    this.setState({isButtonActive: !this.state.isButtonActive})
  };

  displayDate(date) {
    let convertDateType = new Date(date);

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    return {
      month: monthNames[convertDateType.getMonth()],
      day: convertDateType.getDate(),
      year: convertDateType.getFullYear()
    }
  }



  openTheModal(theBill) {
  
    this.props.openModal('editBill', theBill);
  }

  render () {
    const { allUsers, bills, billId, curUser, openModal, deleteBill } = this.props;
      

      if (!allUsers || !bills || !billId) {
        return null;
      }


    return (
      <div className='all-bill-show-container'>
        <button onClick={this.toggleBillDisplay} className='all-expenses-btn'>
          <span className='bill-button-title'>{bills[billId].description}</span>
          {(curUser.id === bills[billId].author_id && bills[billId].author_payor === true) ?
           <span className='bill-show-lending'>{allUsers[bills[billId].recipient_id].name} lent you <div style={{color: "#ff652f"}}>${parseFloat(bills[billId].cost).toFixed(2)}</div></span> 
           : 
          <span className='bill-show-lending'>You lent {allUsers[bills[billId].recipient_id].name} <div style={{color: "#5BC5A7"}}>${parseFloat(bills[billId].cost).toFixed(2)}</div></span>}

          <div className='expense-delete-button' onClick={() => this.props.deleteBill(billId)}>X</div> 
        </button>
        <div className={this.state.isButtonActive ? 'bill-show-toggle-on' : 'bill-show-toggle-off'}>
          <div className='bill-show-dropdown-body'>
            <div className='bill-show-top'>
              <span className="bill-show-title">{bills[billId].description}</span>
              <br/>
              <span className="bill-show-cost">${parseFloat(bills[billId].cost).toFixed(2)}</span>
              <br/>
              <span className='bill-show-add-update'>Added by {allUsers[bills[billId].author_id].name} on {this.displayDate(bills[billId].created_at).month} {this.displayDate(bills[billId].created_at).day}, {this.displayDate(bills[billId].created_at).year} </span>
              <br/>
              <span className='bill-show-add-update'>Last updated on {this.displayDate(bills[billId].updated_at).month} {this.displayDate(bills[billId].updated_at).day}, {this.displayDate(bills[billId].updated_at).year} </span>
              <br/>
              <button className='bill-edit-expense-btn' onClick={() => this.openTheModal(billId)}>Edit expense</button>
              <br/>
            </div>
            <CommentsIndex 
              billId={billId}
              allUsers={allUsers}
            />
          </div> 
        </div>
      </div>
    )





  }







};

export default BillShow;