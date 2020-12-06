import React from 'react';
import BillPage from '../bill/bill_modal_container'
import EditBillPage from '../edit_bill_modal/edit_bill_modal_container'


function Modal({modal, closeModal, billInfo}) {
  if (!modal) {
    return null;
  }
  let currentModalComponent;
  switch (modal) {
    case 'bill':
      currentModalComponent = <BillPage />;
      break;
    case 'editBill':
      currentModalComponent = <EditBillPage billInfo={billInfo}/>;
      break;
    // case 'inviteFriend':

    default:
      return null;
  }


  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { currentModalComponent }
      </div>
    </div>
  );
}

export default Modal;

