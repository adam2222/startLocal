'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import App from './components/App'
import Location from './components/Location'
import WhoAmI from './components/WhoAmI'


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/location" component={Location} />
        <IndexRedirect to="/location" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
