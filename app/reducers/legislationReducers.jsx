import axios from 'axios';
import {browserHistory} from 'react-router'
const API_KEY = "1661ed6bd89881343e2d23be0db1b9aa"

const POPULATE_SEARCH_RESULTS = 'POPULATE_SEARCH_RESULTS'

export const populateSearchResults = (searchResults) => {
  return {
    type:  POPULATE_SEARCH_RESULTS,
    searchResults
  }
}

export const legislationSearch = (location, searchString) => {
  console.log('SEARCHSTRING', searchString)
  console.log('LOCATION', location)
  return dispatch => {
    axios.get(`https://api.legiscan.com/?key=${API_KEY}&op=search&state=${location}&query=${searchString}`)
    .then(legiScanData => legiScanData.data)
    .then(legiScanJSON => {
      dispatch(populateSearchResults(legiScanJSON))
    })
    .then((x) => {
      browserHistory.push('/legislation')
    })
    // .then(axios.get(`https://api.legiscan.com/?key=${API_KEY}&op=getBillText&id=${doc_id}`)
    .catch(err => console.error(err))
  }
}


const legislationReducer = (initialState = {searchResults: []}, action) => {
  let newState;

  switch (action.type) {
    case POPULATE_SEARCH_RESULTS:
      newState = Object.assign({}, initialState, { searchResults: action.searchResults });
      break;
    default:
      return initialState
  }

  return newState
}

export default legislationReducer
