

export const createBill = bills => {

  return $.ajax({
    type: 'POST',
    url: '/api/bills',
    data: { bills } //Needs to match
  })
};

export const destroyBill = (billId) => {

  return $.ajax({
    type: 'DELETE',
    url: `/api/bills/${billId}`
  })
};

export const updateBill = (bills, id) => {
  
  return $.ajax({
    type: 'PATCH',
    url: `/api/bills/${id}`,
    data: { bills }

  })

}

export const fetchBill = (id) => {
  
  return $.ajax({
    type: 'GET',
    url: `/api/bills/${id}`,

  })

}




export const fetchAllBills = () => {

  return $.ajax({
    type: 'GET',
    url: '/api/bills'

  })

};