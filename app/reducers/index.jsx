import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  location: require('./locationReducers').default

})

export default rootReducer
