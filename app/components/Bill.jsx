import React from 'react'
import { connect } from 'react-redux'
import { legislationSearch } from '../reducers/legislationReducers'


const Legislation = props => {
  let bill = props.bill.bill && props.bill.bill.bill
  return (
    <div>
      { bill && (
        <ul className="container">
          <li className="bold">
            {bill.title}
          </li>
          <li>
            {bill.description}
          </li>
          <li>
            {bill.url}
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
