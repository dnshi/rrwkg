import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store'

import App from './App'
import Home from './Home'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

let DevTools
let router = (
  <Router history={history} >
    <Route path="/" component={App}>
      <IndexRoute components={{ content: Home }} />
    </Route>
  </Router>
)

if (__DEV__) {
  DevTools = require('containers/DevTools').default
  router = (
    <div>
      {router}
      <div style={{ fontSize: '12px' }}><DevTools /></div>
    </div>
  )
}

export default function Root() {
  return (
    <Provider store={store}>
      {router}
    </Provider>
  )
}
