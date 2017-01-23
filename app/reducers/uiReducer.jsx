import LocationSearch from '../components/LocationSearch'
import LegislationSearch from '../components/LegislationSearch'
import React from 'react'
import store from '../store'


const UPDATE_UI = 'UPDATE_UI'

export const updateUi = () => {
  return {
    type:  UPDATE_UI,
  }
}


let headers = [
  (
    <button id="download-button"
    className="btn-large waves-effect waves-light teal lighten-1"
    key="1"
    onClick={() => store.dispatch(updateUi())}>
    Start Local
    </button>
  ),
  <h3 key="2">Where do you live?</h3>,
  <h3 key="3">What do you care about?</h3>
]

let searchBars = [(<div key="4"></div>),(<LocationSearch key="5" />), (<LegislationSearch key="6" />)]

const uiReducer = (initialState = {headers: headers, searchBars: searchBars}, action) => {
  let newState;

  switch (action.type) {
    case UPDATE_UI:
      newState = {
        headers: initialState.headers.slice(1),
        searchBars: initialState.searchBars.slice(1)
      };
      console.log('NewStateHEADERS', newState.headers)


      break;
    default:
      return initialState
  }

  console.log('NEWSTATE', newState)
  return newState
}

export default uiReducer
