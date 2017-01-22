import axios from 'axios';
const API_KEY = "AIzaSyCnBMWR-0TuhfB1YC12emEJqANME-Re3No"

const  POPULATE_BILL = 'POPULATE_BILL'

export const populateBill = (bill) => {
  return {
    type:  POPULATE_BILL,
    bill
  }
}

export const billSearch = (billId) => {
  return dispatch => {
    axios.get( `https://api.legiscan.com/?key=1661ed6bd89881343e2d23be0db1b9aa&op=getBill&id=${billId}`)
    .then(billData => billData.data)
    .then(bill => {
      dispatch(populateBill(bill))
    })
    .catch(err => console.error(err))
  }
}


const billReducer = (initialState = {}, action) => {
  let newState = {};

  switch (action.type) {
    case POPULATE_BILL:
      newState.bill = action.bill;
      break;
    default:
      return initialState
  }

  return newState
}

export default billReducer
