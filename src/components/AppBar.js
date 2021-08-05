import React from 'react'
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import cx from 'classnames'
import MobileMenu from "components/MobileMenu"
import SearchBox from "components/SearchBox"
import { useSelector } from "react-redux"
import selectDeviceSize from "redux/selectors/selectDeviceSize"

const AppBar = ({ pages }) => {
  const { mdUp, smUp } = useSelector(selectDeviceSize)

  return (
    <header className='fixed bg-white w-100 z-999 header-shadow'>
      <Container maxWidth='lg'>
        <form className='flex flex-wrap justify-between w-100' noValidate autoComplete="off">
          <div className={
            cx(
              'flex items-center justify-between w-100',
              {'pv3' : mdUp},
              {'pv2': !mdUp}
            )}
          >
            <h1 className={cx('mv0 mr3', {'f3': mdUp}, {' f4': !mdUp})}>
              SCPHA
            </h1>
            <div className='flex justify-between h-100'>
              <SearchBox className={cx({ 'dn': !smUp })} />
              <div className='ml3 w4 black'>
                <Button
                  variant='outlined'
                  color='inherit'
                  className='bg-white b--black w-100 pv0'
                >
                  <span className='ttn black'>Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
          {!smUp && (
            <div className='w-100 mb2 flex justify-between'>
              <SearchBox />
              <MobileMenu {...{ pages }} />
            </div>
          )}
        </form>
      </Container>
    </header>
  )
}

export default AppBar