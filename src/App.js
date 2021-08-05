import React, {useEffect} from 'react'
import './App.css'
import "tachyons"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { Router, Redirect, Location } from "@reach/router"
import PageOne from "pages/PageOne"
import AppBar from "components/AppBar"
import PageNavigation from "components/PageNavigation"
import PageTwo from "pages/PageTwo"
import cx from 'classnames'
import Footer from "components/Footer"
import Layout from "components/Layout"
import PageThree from "pages/PageThree"
import { useDispatch } from "react-redux"
import { updateDeviceSize } from "redux/actions/device"

const App = () => {
  const pages = ['page1', 'page2', 'page3', 'page4']
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const smUp = useMediaQuery(theme.breakpoints.up('sm'))
  const dispatch = useDispatch()

  useEffect(() => {
    const deviceSize = { mdUp, smUp }
    dispatch(updateDeviceSize(deviceSize))
  }, [mdUp, smUp, dispatch])

  return (
    <Location>
      <AppBar {...{ pages }} />
      <div
        className={cx(
          'flex flex-column justify-between min-vh-100',
          { 'pt5': smUp }, { 'pt6': !smUp }
        )}
      >
        <Layout>
          <main>
            <PageNavigation {...{ pages }} />
            <Router>
              <Redirect noThrow from="/" to="page1" />
              <PageOne path='page1' />
              <PageTwo path='page2' />
              <PageThree path='page3' />
            </Router>
          </main>
        </Layout>
        <Footer />
      </div>
    </Location>
  )
}

export default App
