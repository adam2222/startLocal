import React from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'


const LegislationSearch = (props) => {

  return (
  <div>
      <form onSubmit={evt => {
        evt.preventDefault();
        props.locationSearch(evt.target.address.value)
      } }>
        <input id="search" type="search" name="address" placeholder="Search legislation by keyword or phrase" />
        <input type="submit" value={`Search legislation in ${this.props.location}`} />
      </form>
  </div>
)}


const mapStateToProps = (state) => {
  let location = state.location.normalizedInput && `${state.location.normalizedInput.city}, ${state.location.normalizedInput.state}`
  return {
    location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    locationSearch: locationString => {
      return dispatch(locationSearch(locationString))
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (LegislationSearch)
