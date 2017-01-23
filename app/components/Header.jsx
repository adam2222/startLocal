import React from 'react'
import { connect } from 'react-redux'

export const Header = (props) => {

  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">StartLocal</a>
      <a href="#" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
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
