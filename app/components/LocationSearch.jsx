import React from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'


const LocationComponent = (props) => {

// https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters
/*
https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=Amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=YOUR_API_KEY
https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=geocode&language=fr&key=YOUR_API_KEY

https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=YOUR_API_KEY&input=pizza+near%20par

*/

  // function geolocate() {
  //   if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var geolocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //     var circle = new google.maps.Circle({
  //       center: geolocation,
  //       radius: position.coords.accuracy
  //     });
  //     autocomplete.setBounds(circle.getBounds());
  //     });
  //   }
  // }


  // let autocomplete = new google.maps.places.Autocomplete(inputAutoComplete)

  return (
  <div>
      <form onSubmit={evt => {
        evt.preventDefault();
        props.locationSearch(evt.target.address.value)
      } }>
        <input id="search" type="search" name="address" placeholder="Type in your address" />
        <input type="submit" value="Get info for your location" />
      </form>
  </div>
)}


const mapStateToProps = (state) => {
  return {
    location: state.location,
    test: state.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    locationSearch: locationString => {
      return dispatch(locationSearch(locationString))
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (LocationComponent)
