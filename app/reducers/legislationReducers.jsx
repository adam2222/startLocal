import axios from 'axios';
const API_KEY = "AIzaSyCnBMWR-0TuhfB1YC12emEJqANME-Re3No"

const POPULATE_SEARCH_RESULTS = 'POPULATE_SEARCH_RESULTS'

export const populateSearchResults = (searchResults) => {
  return {
    type:  POPULATE_SEARCH_RESULTS,
    searchResults
  }
}

export const legislationSearch = (location, searchString) => {
  return dispatch => {
    axios.get(`https://api.legiscan.com/?key=1661ed6bd89881343e2d23be0db1b9aa&op=search&state=${location}&query=${searchString}`)
    .then(legiScanData => legiScanData.data)
    .then(legiScanJSON => {
      dispatch(populateSearchResults(legiScanJSON))
    })
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
