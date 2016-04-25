import React, { PropTypes } from 'react'
import Header from 'components/Header'
import MainSection from 'components/MainSection'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from 'actions'

export default function Home({ todos, actions }) {
  return (
    <div className={'container-fluid'}>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  )
}

Home.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.element,
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
