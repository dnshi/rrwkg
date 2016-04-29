import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'
import graphqlMiddleware from 'middleware/graphql'

let enhancer

if (__DEV__) {
  const createLogger = require('redux-logger')
  const DevTools = require('containers/DevTools').default
  const persistState = require('redux-devtools').persistState

  enhancer = compose(
    applyMiddleware(graphqlMiddleware, thunk, createLogger()),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  )
} else {
  enhancer = applyMiddleware(graphqlMiddleware, thunk)
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (__DEV__ && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers').default)
    )
  }

  return store
}
