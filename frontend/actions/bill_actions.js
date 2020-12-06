import * as billApiUtil from '../util/bill_api_util'

export const RECEIVE_BILL = 'RECEIVE_BILL';
export const RECEIVE_ALL_BILLS = 'RECEIVE_ALL_BILLS';
export const REMOVE_BILL = 'REMOVE_BILL';

const receiveBill = bill => {
  return {
    type: RECEIVE_BILL,
    bill
  };
}

const receiveBills = bills => {

  return {
    type: RECEIVE_ALL_BILLS,
    bills
  };
}


const removeBill = billId => {

  return {
    type: REMOVE_BILL,
    billId
  };
}

export const addBill = bill => dispatch => {

  return billApiUtil.createBill(bill)
    .then(bill => dispatch(receiveBill(bill)))
}

export const fetchBill = billId => dispatch => {

  return billApiUtil.fetchBill(billId)
    .then((bill) => dispatch(receiveBill(bill)))
}

export const requestBills = () => dispatch => {

  return billApiUtil.fetchAllBills()
    .then((bills) => dispatch(receiveBills(bills)))
}

export const updateBill = (bill, id) => dispatch => {
  
  return billApiUtil.updateBill(bill, id)
    .then((bill) => dispatch(receiveBill(bill)))
}

export const deleteBill = billId => dispatch => {

  return billApiUtil.destroyBill(billId)
    .then(() => dispatch(removeBill(billId)))
}
