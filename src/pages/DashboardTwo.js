import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProgressCard from "../components/cards/ProgressCard";
import BarCharts from "../components/charts/BarCharts";
import CrazyChart from "../components/charts/CrazyChart";
import PieChart from "../components/charts/PieChart";
// import RadarChart from "../components/charts/Radar";
import SimpleSlider from '../components/mainSlider';

const useStyles = makeStyles((theme) => ({
  gridItems: {
    width: "100%",
  }
}));


export default function DashboardTwo() {
  var classes = useStyles();
  return (
    <>
      <SimpleSlider />

      <Grid container justify={"center"} spacing={2}>

        <Grid item className={classes.gridItems} md={6}>
          <BarCharts />
        </Grid>

        <Grid item className={classes.gridItems} md={6}>
          <ProgressCard />
        </Grid>
      </Grid>

      <Grid container justify={"center"} spacing={2}>

        <Grid item className={classes.gridItems} md={8}>
          <CrazyChart />
        </Grid>

        <Grid item className={classes.gridItems} md={4}>
          <PieChart />
        </Grid>

      </Grid>

    </>
  );
}
