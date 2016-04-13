import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function App(props) {
  return (
    <div>
      <Link to="/about">About</Link>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element,
}
