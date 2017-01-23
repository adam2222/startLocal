import React from 'react'
import { connect } from 'react-redux'
import { legislationSearch } from '../reducers/legislationReducers'


const Legislation = props => {
  let bill = props.bill.bill && props.bill.bill.bill
  return (
    <div className="container">
      { bill && (
        <ul className="container">
          <br></br>
          <br></br>
          <li className="bold">
            {bill.title}
            <br></br>
          </li>
          <li>
            {bill.description}
          </li>
          <li>
            <a href={bill.state_link} target="_blank" rel="noopener noreferrer">{bill.state_link}</a>
          </li>
          <li>
            {bill.committee.name}
          </li>
          <li>
            {bill.committee.chamber}
          </li>
          <li>
            {bill.session.session_name}
          </li>
          <li>
            {bill.description}
          </li>
        </ul>)
      }

    </div>
  )
}

const mapStateToProps = state => {
  return {
      bill: state.bill
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
