// import classes from '*.module.css';
import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Pie } from 'react-chartjs-2';
// import useStyles from '../cards/style';

const useStyles = makeStyles((theme) => ({
  Card: {
    background: theme.palette.glass.main,
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  
  PieHeading: {
    fontWeight: 600,
    color: theme.palette.fontColor.main,
    margin: 0,
  },



}));

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  const classes = useStyles();

  return (
    <Card className={classes.Card}>
      {/* <div className={classes.Heading}>
        <h1 className={classes.Title}>Pie Chart</h1>
      </div> */}
      <Typography className={classes.PieHeading} component="h4" variant='h5'>Pie Chart</Typography>
      <Pie data={data} />
    </Card>
  );
};

export default PieChart;