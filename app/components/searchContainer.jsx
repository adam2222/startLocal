
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
    this.state = {
      searchBar: (<div></div>),
      buttonTitle: "Start Local",
      buttonTitles: ["Where do you live?", "What do you care about?"],
      searchBars: [(<LocationSearch key="1" />), (<LegislationSearch key="2"/>)]
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(searchBar, buttonTitle) {
    let newSearchBars = this.state.searchBars;
    let newButtonTitles = this.state.buttonTitles;

    this.setState({
      searchBar,
      buttonTitle,
      searchBars: newSearchBars,
      buttonTitles: newButtonTitles
    })
  }

render() {
  let searchBars = this.state.searchBars
  let buttonTitles = this.state.buttonTitles

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <div className="row center">
        <button id="download-button"
          className="btn-large waves-effect waves-light teal lighten-1"
          onClick={() => this.handleClick(searchBars.shift(), buttonTitles.shift())}>
          {this.state.buttonTitle}
        </button>

        <br></br>
        <br></br>
        <br></br>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnterTimeout={700}
          transitionLeaveTimeout={500}>
           {this.state.searchBar}

         </ReactCSSTransitionGroup>
      </div>


      </div>
  )}

}


export default SearchContainer
