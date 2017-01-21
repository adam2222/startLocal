import React from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'


const LocationComponent = (props) => {
  let offices = props.location.offices
  let officeHolders = props.location.officials

  const makeSocialLink = (type, id) => {
    switch (type) {
      case 'GooglePlus':
        return `https://plus.google.com/${id}`
      case 'Twitter':
        return `https://twitter.com/${id}`;
      case 'Facebook':
        return `https://www.facebook.com/${id}`;
      case 'YouTube':
        return `https://www.youtube.com/${id}`;
      default:
        return id;
    }
  }

  const makeTelLink = tel => {
    const formattedTel = tel.replace(/\D+/g, '')
    return formattedTel;
  }

  return (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault();
      props.locationSearch(evt.target.address.value)
    } }>
      <input name="address" placeholder="Type in your address" />
      <input type="submit" placeholder="Get info for your location" />
    </form>

    <br></br>

    <table className="striped z-depth-2">
      <thead>
        <tr className="z-depth-2">
          <th data-field="office">Official</th>
          <th data-field="name">Office Holder</th>
          <th></th>
          <th data-field="Party">Party</th>
          <th data-field="Telephone">Telephone</th>
          <th data-field="Social Media">Social Media</th>
          <th data-field="Homepage">Homepage</th>
          <th data-field="Address">Address</th>
        </tr>
      </thead>

      <tbody className="striped z-depth-2">

      {offices && offices.map((office, idx) => {
        let realIdx = office.officialIndices && office.officialIndices[0]
        let officeHolder = officeHolders[realIdx] || officeHolders[idx]

        return(
          <tr className="striped z-depth-2" key={idx}>
            <td className="bold">{office.name}</td>

            <td className="bold">{officeHolder.name}</td>

            <td>{ officeHolder.photoUrl ?
                <img src={`${officeHolder.photoUrl}`}></img>
                :
                <img src={`/images/default-headshot.jpg`}></img>
              }
            </td>

            <td>{officeHolder.party}</td>

            <td>
              <ul className="collection">
                {officeHolder.phones && officeHolder.phones.map((phone, idx) => {
                  return (
                    <li key={idx}>
                      <a href={`skype:+1${makeTelLink(phone)}?call`}>{phone}</a>
                    </li>
                  )
                })}
              </ul>
            </td>

            <td>
              <ul className="collection">
                {officeHolder.channels && officeHolder.channels.map((channel, idx) => {
                  return (
                    <li key={idx}>
                      {channel.type}: <a href={makeSocialLink(channel.type, channel.id)} target="_blank" rel="noopener noreferrer">{channel.id}</a>
                    </li>
                  )
                })}
              </ul>
            </td>

            <td>
              <ul className="collection">
                {officeHolder.urls && officeHolder.urls.map((url, idx) => {
                  return (
                    <li key={idx}>
                      <a href={`${url}`} target="_blank" rel="noopener noreferrer">{url}</a>
                    </li>
                  )
                })}
              </ul>
            </td>

            <td>
              <table>
                <tbody>
                {officeHolder.address && officeHolder.address.map((address, idx) => {
                  return (
                    <tr key={idx} >
                      <td className="noBorder">
                        <ul className="collection">
                           <li>
                             {address.line1}
                           </li>
                           <li>
                             {address.line2}
                           </li>
                           <li>
                             {address.city}
                           </li>
                           <li>
                             {address.state}
                           </li>
                           <li>
                             {address.zip}
                           </li>
                     </ul>
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </td>

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
