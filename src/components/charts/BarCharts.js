import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Line } from 'react-chartjs-2';
import theme from '../../theme';

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: '# of votes',
      data: [5, 10, 13, 15, 20, 30, 35],
      fill: true,
      backgroundColor: "#3e98c7",
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const useStyles = makeStyles((theme) => ({
  Card: {
    background: theme.palette.glass.main,
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  parent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  dailyRevenue: {
    fontWeight: 600,
    color: theme.palette.fontColor.main,

  },
  finalPrice: {
    color: theme.palette.fontColor.main,
  },

  subTitle: {
    fontSize: "1rem",
  }


}));


export default function BarCharts() {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <div className={classes.parent}>

        <div>
          <Typography component="h4" variant='h5' className={classes.dailyRevenue}>Daily Revenue
          </Typography>
          <Typography variant='body2' className={classes.subTitle}>
            Lorem ipsum dolor
          </Typography>
        </div>

        <div>
          <Typography className={classes.finalPrice} component="h4" variant='h5' style={{ textAlign: 'right', fontWeight: '600' }}>$ 154K
          </Typography>
          <Typography className={classes.pricing}>
            <span style={{ color: theme.palette.success.main }} >+ 1.5% </span>than last week
          </Typography>
        </div>

      </div>
      <Line data={data} options={options} />
    </Card>
  )
}
