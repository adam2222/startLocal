import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  location: require('./locationReducers').default,
  legislation: require('./legislationReducers').default,
  bill: require('./bill').default,
  ui: require('./uiReducer').default
})

export default rootReducer
