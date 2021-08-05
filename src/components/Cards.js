import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { LoremIpsum } from "lorem-ipsum"

const Cards = () => (
  <Grid container spacing={4} className='w-100 h-100 mb4'>
    <Grid item xs={12} sm={12} md={6}>
      <Card title='Card 1'/>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <Card title='Card 2' />
    </Grid>
  </Grid>
)

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 3
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const Card = ({ title }) => {
  return (
    <Paper square elevation={0} sx={{ minWidth: 250 }} className='h-100 flex flex-column justify-between'>
      <CardContent className='mh3'>
        <h2>{title}</h2>
        <p>{lorem.generateParagraphs(1)}</p>
      </CardContent>
      <CardActions className='mh3'>
        <Button variant='text' size="small">
          <span className='ttn f6 fw4 deep-blue'>Read More</span>
        </Button>
      </CardActions>
    </Paper>
  )
}

export default Cards