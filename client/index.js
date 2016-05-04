import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/root'
import 'index.html'
import 'global/global.scss'

const MOUNT_ELEMENT = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    MOUNT_ELEMENT
  )
}

if (module.hot) {
  module.hot.accept('./containers/root', render)
}

render()
