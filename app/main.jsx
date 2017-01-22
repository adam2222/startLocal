'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import App from './components/App'
import Location from './components/Location'
import Bill from './components/Bill'
import Legislation from './components/Legislation'
import WhoAmI from './components/WhoAmI'
import {billSearch} from './reducers/bill'

const singleBillOnEnter = nextRouterState => {
  let billId = nextRouterState.params.id
  store.dispatch(billSearch(billId))
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/location" component={Location} />
        <Route path="/legislation" component={Legislation} />
        <Route path="/bill/:id" component={Bill} onEnter={singleBillOnEnter} />
        <IndexRedirect to="/location" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
