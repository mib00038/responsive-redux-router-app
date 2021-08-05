import React from "react"
import MuiContainer from "@material-ui/core/Container"
import cx from "classnames"
import { useSelector } from "react-redux"
import selectDeviceSize from "redux/selectors/selectDeviceSize"

const Layout = ({ children }) => {
  const { smUp } = useSelector(selectDeviceSize)

  return (
    <div className='bg-concrete h-100'>
      <MuiContainer maxWidth='lg' className={cx({ 'mui-container': !smUp })} >
        <div className='flex flex-column justify-between'>
          {children}
        </div>
      </MuiContainer>
    </div>
  )
}

export default Layout