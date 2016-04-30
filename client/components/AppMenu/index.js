import React from 'react'
import classNames from 'classnames'
import _appMenu from './appMenu.scss'

export default function AppMenu() {
  let style = {
    backgroundImage: 'url("http://www.adiumxtras.com/images/thumbs/dango_menu_bar_icon_set_11_19047_6240_thumb.png")',
  }
  return (
    <aside className={_appMenu.panel}>
      <div className={_appMenu.head}>
        <a className={_appMenu.user} style={style}></a>
      </div>
      <ul className={_appMenu.navList}>
        <li className={classNames(_appMenu.navItem, _appMenu.navItemActive)}>
          <a className={_appMenu.navItemBtn}>
            <i className={classNames('fa', 'fa-comments-o')}></i>
          </a>
        </li>
        <li className={_appMenu.navItem}>
          <a className={_appMenu.navItemBtn}>
            <i className={classNames('fa', 'fa-bell-o')}></i>
          </a>
        </li>
      </ul>
      <div className={_appMenu.footer}>

      </div>
    </aside>
  )
}
