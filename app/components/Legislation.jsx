import React from 'react'
import { connect } from 'react-redux'
import { legislationSearch } from '../reducers/legislationReducers'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const Legislation = props => {
  let results = props.searchResults
  console.log('RESULTS', results)

  return (
    <div>
      <form onSubmit={evt => {
        evt.preventDefault();
        let searchString = evt.target.search.value
        props.legislationSearch(props.userState, searchString)
        } }>

        <input name="search" placeholder="What do you care about?" />
        <input className="btn-large waves-effect waves-light teal lighten-1" type="submit" value="Click to search" />
      </form>

      {results.searchresult && Object.keys(results.searchresult).map((legislationKey, idx) => {
        let legislation = results.searchresult[legislationKey]

        return (
          <ul key={idx} className="collection">
            <li>Bill number: {legislation.bill_number}</li>
            <li className="bold">
              <Link to={`/bill/${legislation.bill_id}`}>Title: {legislation.title}</Link>
            </li>
            <li>Most Recent Action: {legislation.last_action}</li>
            <li>Date of Most Recent Action: {legislation.last_action_date}</li>
          </ul>
        )
      })}
    </div>
  )

}


const mapStateToProps = state => {
  let location = state.location.normalizedInput && state.location.normalizedInput.state
  let userState = location|| "NY"
  let searchResults = state.legislation.searchResults

  return {
      userState,
      searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    legislationSearch: (location, searchString) => {
      return dispatch(legislationSearch(location, searchString))
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (Legislation)
