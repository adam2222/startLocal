import React from 'react'
import { connect } from 'react-redux'

export const Header = (props) => {

  return (
    <nav>
    <div className="nav-wrapper teal lighten-2">
      <a href="#!" className="brand-logo">StartLocal</a>
      <a href="#" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Your representatives</a></li>
        <li><a href="#">Your causes</a></li>
      </ul>
    </div>
  </nav>
  )
}

const mapStateToProps = state => {
  return {
      location: state.location
    }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect (mapStateToProps, mapDispatchToProps) (Header)
