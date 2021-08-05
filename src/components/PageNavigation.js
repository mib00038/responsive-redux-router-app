import React from "react"
import cx from "classnames"
import { useLocation } from "@reach/router"
import { Link as RouterLink } from '@reach/router'
import Link from "@material-ui/core/Link"
import { useSelector } from "react-redux"
import selectDeviceSize from "redux/selectors/selectDeviceSize"

const PageNavigation = ({ pages }) => {
  const { pathname } = useLocation()
  const { smUp } = useSelector(selectDeviceSize)

  return (
    <nav className={cx({ 'mt3 mb4 black': smUp }, { 'dn': !smUp })}>
      {pages.map(page => {
        const to = `/${page}`
        const isActive = pathname === to

        return (
          <Link
            key={page}
            underline={isActive ? 'none' : 'hover'}
            component={RouterLink}
            to={to}
            classes={{root: cx({'cursor-default': isActive })}}
          >
            <span className={cx('mr5 black b', {'blue': isActive})}>
              {page}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export default PageNavigation