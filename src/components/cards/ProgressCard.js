import { Card, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaleProgress from '../charts/SaleProgress';
import useStyles from './style';

export default function ProgressCard() {
  const classes = useStyles();
  return (
    <Card className={classes.cardWrapper}>

      <div className={classes.titleWrapper}>
        <Typography className={classes.mainTitle} component="h5" variant="h5">
          Shrimp and Chorizo Paella
          </Typography>

        <IconButton className={classes.moreButton} aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </div>

      <SaleProgress />
      <Typography className={classes.monthlyProject} component="h5" variant="h5">
        100 Projects/ monthly
          </Typography>


    </Card >
  )
}
