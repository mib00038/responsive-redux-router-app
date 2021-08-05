import React from 'react'
import Grid from "@material-ui/core/Grid"

const Banner = () => (
  <section className='mb4'>
    <Grid container>
      <Grid item xs={4} className='bg-dark-gray'>
      </Grid>
      <Grid item xs={8} className='bg-black pv2 pl4'>
        <h4 className='white mb0'>Subtitle</h4>
        <h1 className='white mt3 mb5 f1 mr3 lh-title fw4'>Banner for the website</h1>
        <span className='db lavender f5 fw4 no-underline underline-hover pointer'>Read More</span>
      </Grid>
    </Grid>
  </section>
)

export default Banner