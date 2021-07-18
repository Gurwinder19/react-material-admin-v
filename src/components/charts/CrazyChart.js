import { Card, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);
const genData = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [rand(), rand(), rand(), rand(), rand(), rand()],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        },
    ],
});

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

    title: {
        fontWeight: 600,
        color: theme.palette.fontColor.main,
        margin: 0,
    },



}));




const CrazyChart = () => {
    const [data, setData] = useState(genData());

    useEffect(() => {
        const interval = setInterval(() => setData(genData()), 5000);

        return () => clearInterval(interval);
    }, []);

    const classes = useStyles();

    return (
        <Card className={classes.Card}>
            {/* <div className={classes.heading}>
                <h1 className={classes.title}>Flow Chart</h1>
            </div> */}
            <Typography className={classes.title} component="h4" variant='h5'>Flow Chart</Typography>
            <Bar data={data} options={options} />
        </Card>
    );
};

export default CrazyChart;