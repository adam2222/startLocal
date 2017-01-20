import axios from 'axios';
const API_KEY = "AIzaSyCnBMWR-0TuhfB1YC12emEJqANME-Re3No"

const POPULATE_LOCATION_INFO = 'POPULATE_LOCATION_INFO'

export const populateLocationInfo = (location) => {
  return {
    type: POPULATE_LOCATION_INFO,
    location
  }
}

export const locationSearch = locationString => {
  return dispatch => {
    axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${locationString}&key=${API_KEY}`)
    .then(googleData => googleData.data)
    .then(googleJSON => {
      dispatch(populateLocationInfo(googleJSON))
    })
    .catch(err => console.error(err))
  }
}


const locationReducer = (initialState = {}, action) => {
  let newState;

  switch (action.type) {
    case POPULATE_LOCATION_INFO:
      newState = action.location;
      break;
    default:
      return initialState
  }

  return newState
}

export default locationReducer
