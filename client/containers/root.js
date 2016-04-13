import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store'

import App from './App'
import Home from './Home'
import About from './About'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

let DevTools

if (__DEV__) {
  DevTools = require('containers/DevTools').default
}

export default function Root() {
  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
          </Route>
        </Router>
        {__DEV__ && <DevTools />}
      </div>
    </Provider>
  )
}
