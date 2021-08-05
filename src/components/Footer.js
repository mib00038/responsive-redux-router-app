import React from "react"
import MuiContainer from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import cx from "classnames"
import { LoremIpsum } from "lorem-ipsum"
import selectDeviceSize from "redux/selectors/selectDeviceSize"
import { useSelector } from "react-redux"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 2
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const Footer = () => {
  const { smUp } = useSelector(selectDeviceSize)

  return (
    <MuiContainer maxWidth='lg'>
      <footer className='w-100 mv3'>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} className={cx('pr2', { 'bb': !smUp }, { 'br': smUp })}>
            <h2 className='mv1'>SCPHA</h2>
            <h4 className='mv2'>Latest Blog Post</h4>
            <h2 className='mv2 fw4'>Ready to get started?</h2>
            <p>{lorem.generateParagraphs(1)}</p>
          </Grid>
          <Grid item xs={12} sm={6} className='pt2'>
            <Grid container className='w-100'>
              <Grid item sm={2} />
              <Grid item xs={6} sm={5}>
                <ul className='list mh2'>
                  <FooterColumnListItem title='Product' header />
                  <FooterColumnListItem title='Product' />
                  <FooterColumnListItem title='Product' />
                  <FooterColumnListItem title='Product' />
                  <FooterColumnListItem title='Product' />
                  <FooterColumnListItem title='Product' />
                </ul>
              </Grid>
              <Grid item xs={6} sm={5}>
                <ul className='list mh2'>
                  <FooterColumnListItem title='Company' header />
                  <FooterColumnListItem title='Company' />
                  <FooterColumnListItem title='Company' />
                  <FooterColumnListItem title='Company' />
                  <FooterColumnListItem title='Company' />
                  <FooterColumnListItem title='Company' />
                </ul>
              </Grid>
              <CopyRight />
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </MuiContainer>
  )
}

const FooterColumnListItem = ({ title, header = false }) =>  (
  <li className={cx('ph0', {'mv0': !header}, {'b mt0 mb2': header})}>
    {title}
  </li>
)

const CopyRight = () => (
  <div className='w-100 f6 deep-blue mt4 tc'>@ 2010 - 2020 <span className='ml3 pointer underline-hover'>Privacy - Terms</span></div>
)

export default Footer