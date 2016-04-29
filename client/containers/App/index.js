import React, { PropTypes } from 'react'
import AppMenu from 'components/AppMenu'
import classNames from 'classnames'
import _app from './app.scss'

export default function App({ sidebar, content }) {
  return (
    <div className={_app.mainContainer}>
      <AppMenu />
      <main className={classNames(_app.container, { [_app.sidebarExpanded]: Boolean(sidebar) })}>
        <section className={_app.sidebar}>
          {sidebar}
        </section>
        <section className={_app.content}>
          {content}
        </section>
      </main>
    </div>
  )
}

App.propTypes = {
  content: PropTypes.element.isRequired,
  sidebar: PropTypes.element,
}
