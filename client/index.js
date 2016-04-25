import React from 'react'
import ReactDOM from 'react-dom'
import 'index.html'
import 'global/global.scss'

const MOUNT_ELEMENT = document.getElementById('root')

let render = () => {
  const Root = require('./containers/root').default
  ReactDOM.render(<Root />, MOUNT_ELEMENT)
}

if (__DEV__ && module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(<RedBox error={error} />, MOUNT_ELEMENT)
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('./containers/root', render)
}

render()
