
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'
import LocationSearch from './LocationSearch'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SearchContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchBars: [<LocationSearch />],
      searchBar: (<div></div>)
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.setState({searchBar: this.state.searchBars.pop()})
  }

render() {
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <div className="row center">
        <button id="download-button"
          className="btn-large waves-effect waves-light teal lighten-1"
          onClick={this.handleClick}>
          Start Local
        </button>

        <br></br>
        <br></br>
        <br></br>
        
        <ReactCSSTransitionGroup
          transitionName="search"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}>
           {this.state.searchBar}

         </ReactCSSTransitionGroup>
      </div>


      </div>
  )}

}


export default SearchContainer
