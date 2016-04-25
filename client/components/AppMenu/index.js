import React from 'react'
import classNames from 'classnames'
import _appMenu from './appMenu.scss'

export default function AppMenu() {
  let style = {
    backgroundImage: 'url("https://lh4.googleusercontent.com/-6uBfz5wUBVw/AAAAAAAAAAI/AAAAAAAAAEM/YS8gF-UZBVA/photo.jpg?sz=50")',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  }
  return (
    <aside className={_appMenu.panel}>
      <div className={_appMenu.head}>
        <a className={_appMenu.user}>
          <div className={_appMenu.avatar} style={style}></div>
        </a>
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
