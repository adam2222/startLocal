import React from 'react'
import { connect } from 'react-redux'
import { legislationSearch } from '../reducers/legislationReducers'
import {browserHistory} from 'react-router'


const LegislationSearch = (props) => {

  return (
  <div>
      <form onSubmit={evt => {
        evt.preventDefault();
        let searchString = evt.target.search.value
        props.legislationSearch(props.locationState, searchString)
      } }>
        <input id="search" type="search" name="address" placeholder="Search legislation by keyword or phrase" />
        <input className="btn-large waves-effect waves-light teal lighten-1" type="submit" value={`Search ${props.location}`} />
      </form>
  </div>
)}


const mapStateToProps = (state) => {
  let location = state.location.normalizedInput && `${state.location.normalizedInput.city}, ${state.location.normalizedInput.state}`
  let locationState = state.location.normalizedInput && state.location.normalizedInput.state
  return {
    location,
    locationState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    legislationSearch: string => {
      return dispatch(legislationSearch(string))
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (LegislationSearch)
