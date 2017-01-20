import React from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'



const LocationComponent = (props) => {
  let officesInput = props.location.offices
  let officialsInput = props.location.officials
  let offices = officesInput && officesInput.map(office => office.name)
  let officeHolders = officialsInput && officialsInput.map(officialInfo => officialInfo)

  return (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault();
      console.log('click')
      props.locationSearch(evt.target.address.value)
    } }>
      <input name="address" placeholder="Type in your address" />
      <input type="submit" value="Get info for your location" />
    </form>
    <br></br>
    <table className="striped">
      <thead>
        <tr>
          <th data-field="office">Official</th>
          <th data-field="name">Office Holder</th>
          <th data-field="Twitter">Twitter</th>
          <th data-field="Telephone">Telephone</th>
          <th data-field="Address">Address</th>
        </tr>
      </thead>
      <tbody>
      {offices && offices.map((office, idx) => {
        return(
          <tr key={idx}>
            <td>{office}</td>
            <td>{officeHolders[idx].name}</td>
            <td>{officeHolders[idx].party}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
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
