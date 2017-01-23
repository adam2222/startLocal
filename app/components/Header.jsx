import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'

export const Header = (props) => {

  return (
    <nav>
    <div className="nav-wrapper teal lighten-2">
      <Link to="/start" className="brand-logo center">StartLocal</Link>
      <a href="#" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/location">Your representatives</Link></li>
        <li><Link to="/legislation">Your causes</Link></li>
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
