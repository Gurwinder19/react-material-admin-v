import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProgressCard from "../components/cards/ProgressCard";
import BarCharts from "../components/charts/BarCharts";
import CrazyChart from "../components/charts/CrazyChart";
import PieChart from "../components/charts/PieChart";
import SimpleSlider from '../components/mainSlider';

const useStyles = makeStyles((theme) => ({
  gridItems: {
    width: "100%",
  }
}));


export default function Dashboard() {
  var classes = useStyles();
  return (
    <>
      <Grid container justify={"center"} spacing={2}>

        <Grid item className={classes.gridItems} md={6}>
          <BarCharts />
        </Grid>


        <Grid item className={classes.gridItems} md={6}>
          <ProgressCard />
        </Grid>
      </Grid>

      <SimpleSlider />

      <Grid container justify={"center"} spacing={2}>

        <Grid item className={classes.gridItems} md={6}>
          <CrazyChart />
        </Grid>

        <Grid item className={classes.gridItems} md={6}>
          <PieChart />
        </Grid>
        
      </Grid>

    </>
  );
}
