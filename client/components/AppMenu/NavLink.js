import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'

import _appMenu from './appMenu.scss'

export default function NavLink(props) {
  return (
    <li className={_appMenu.navItem}>
      <Link {...props}
        className={_appMenu.navItemBtn}
        activeClassName={classNames(_appMenu.navItemBtnActive)}
      />
    </li>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
}
