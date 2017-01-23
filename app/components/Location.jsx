import React from 'react'
import { connect } from 'react-redux'
import { locationSearch } from '../reducers/locationReducers'


const LocationComponent = (props) => {
  let offices = props.location.offices
  let officeHolders = props.location.officials

  const makeSocialLink = (type, id) => {
    switch (type) {
      case 'GooglePlus':
      return (
        <a href={`https://plus.google.com/${id}`} data-screen-name={id} target="_blank" rel="noopener noreferrer">
          {id}
        </a>
      )
      case 'Twitter':
        return (
          <div>
            <a href={`https://twitter.com/messages/compose?recipient_id=${id}`} className="twitter-dm-button" data-screen-name={id} data-show-count="false" target="_blank" rel="noopener noreferrer">
              @{id}
            </a><script async src="https://platform.twitter.com/widgets.js"></script>
          </div>
        );
      case 'Facebook':
      return (
        <a href={`https://www.facebook.com/${id}`} data-screen-name={id} target="_blank" rel="noopener noreferrer">
          {id}
        </a>
      )
      case 'YouTube':
        return (
          <a href={`https://www.youtube.com/${id}`} data-screen-name={id} target="_blank" rel="noopener noreferrer">
            {id}
          </a>
        )
      default:
        return id;
    }
  }

  const makeTelLink = tel => {
    const formattedTel = tel.replace(/\D+/g, '')
    return formattedTel;
  }

  const findPhoto = (officeHolder) => {
    if (officeHolder.name.search("Trump") != -1) {
      return (<img src='/images/trump.jpg'></img>)
    } else if (officeHolder.name.search("Pence") !== -1) {
      return (<img src={'/images/pence1.jpeg'}></img>)
    } else if (officeHolder.photoUrl) {
      return (<img src={`${officeHolder.photoUrl}`}></img>)
    } else {
      return (<img src={`/images/default-headshot.jpg`}></img>)
    }
  }


    // <form onSubmit={evt => {
    //     evt.preventDefault();
    //     props.locationSearch(evt.target.address.value)
    //   } }>
    //   <input name="address" placeholder="Type in your address" />
    //   <input type="submit" placeholder="Get info for your location" />
    // </form>
  return (
      <div>
    <br></br>

    <table className="striped z-depth-2">
      <thead>
        <tr className="z-depth-2">
          <th data-field="office">Official</th>
          <th data-field="name">Office Holder</th>
          <th></th>
          <th data-field="Party">Party</th>
          <th data-field="Telephone">Telephone <i className="tiny material-icons">phone</i></th>
          <th data-field="Social Media">Social Media</th>
          <th data-field="Homepage">Homepage</th>
          <th data-field="Address">Address </th>
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

            <td>
              { findPhoto(officeHolder) }

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
                      {channel.type}: {makeSocialLink(channel.type, channel.id)}
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
