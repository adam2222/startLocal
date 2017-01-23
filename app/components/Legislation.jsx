import React from 'react'
import { connect } from 'react-redux'
import { legislationSearch } from '../reducers/legislationReducers'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// https://openstates.org/api/v1/METHOD/


// LegiScan
// https://api.legiscan.com/?key=1661ed6bd89881343e2d23be0db1b9aa&op=search&state=${state}&query=${query}
    // year Year where 1=all, 2=current, 3=recent, 4=prior, >1900=exact [Default: 2]
// https://api.legiscan.com/?key=1661ed6bd89881343e2d23be0db1b9aa&op=getBill&id=${bill_id}:
// https://api.legiscan.com/?key=1661ed6bd89881343e2d23be0db1b9aa&op=getBillText&id=${doc_id}
// 1661ed6bd89881343e2d23be0db1b9aa
// last_action_date ?
 // https://api.legiscan.com/?key=1661ed6bd89881343e2d23be0db1b9aa&op=getBill&id=915547

// Propublica
// X-API-Key: bWV7cV8AlV9t2sWAiMWPKoOMtMMvSr11XLQWO4gb


const Legislation = props => {
  let results = props.searchResults

  return (
    <div>
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
      <h1>Fading at Initial Mount</h1>
    </ReactCSSTransitionGroup>
      <form onSubmit={evt => {
        evt.preventDefault();
        let searchString = evt.target.search.value
        props.legislationSearch(props.userState, searchString)
        } }>

        <input name="search" placeholder="What do you care about?" />
        <input type="submit" value="Click to search" />
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
