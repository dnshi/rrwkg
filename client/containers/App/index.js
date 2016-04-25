import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppMenu from 'components/AppMenu'
import classNames from 'classnames'
import _app from './app.scss'
import * as TodoActions from 'actions'

export default class App extends Component {
  static propTypes = {
    content: PropTypes.element,
    sidebar: PropTypes.element,
    users: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { actions } = this.props
    console.log(actions.getUser)
    actions.getUser(
      `{
      	user(id: "1") {
      	  name
      	}
      }`
    )
  }

  render() {
    const { sidebar, content, users } = this.props
    console.log(users)
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
}

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
