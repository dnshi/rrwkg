import React, { Component, PropTypes } from 'react'
import Header from 'components/Header'
import MainSection from 'components/MainSection'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from 'actions'

export default class Home extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.element,
  }

  componentWillMount() {
    const { actions } = this.props
    actions.retrieveTodos()
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div className={'container-fluid'}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
