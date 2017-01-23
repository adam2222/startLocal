
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'
import LocationSearch from './LocationSearch'
import LegislationSearch from './LegislationSearch'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SearchContainer extends Component {
  constructor(props){
    super(props)
  }

render() {
  let searchBar = this.props.searchBars && this.props.searchBars[0]
  let header = this.props.headers && this.props.headers[0]
  console.log('HEADERS', header)

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <div className="row center">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnterTimeout={700}
          transitionLeaveTimeout={500}>

          { header }
          <br></br>
          <br></br>
          <br></br>

          { searchBar }
         </ReactCSSTransitionGroup>
      </div>
    </div>
  )}

}

  // {header}
const mapStateToProps = (state) => {

  return {
    location: state.location,
    headers: state.ui.headers,
    searchBars: state.ui.searchBars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUi: () => {
      return dispatch(updateUi())
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (SearchContainer)
