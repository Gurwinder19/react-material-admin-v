import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import biryani from '../../images/biryanis.jpg';
import burgers from '../../images/burgers.jpg';
import dals from '../../images/dals.jpg';
import mixture from '../../images/mixture.jpg';
import noodles from '../../images/noodles.jpg';
import sabziyan from '../../images/sabziyan.jpg';
// import useStyles from '../../layout/styles';
import { makeStyles, Typography } from '@material-ui/core';
import theme from '../../theme';


var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: 20,
};

const useStyles = makeStyles({
  
  slideBox: {
    padding: theme.spacing(0, 3.125),
    margin:theme.spacing(1, 0),
  },
  
  sliderWrapper: {
    background: 'red',
  },

  mainTitle: {
    color: theme.palette.fontColor.main,
    fontSize: "1.5rem",
    fontWeight: 600,
    margin: theme.spacing(2.5, 0),
  },

});


export default function SimpleSlider() {
  const classes = useStyles();
  return (
    <div className={classes.slideBox}>
      <Typography className={classes.mainTitle} variant="body1" component="h4"> Single Item</Typography>
      <Slider {...settings}>
        <div className={classes.slideWrapper}>
          <SliderCard name='Biryani' image={biryani} view='12k' />
        </div>

        <div className={classes.slideWrapper}>
          <SliderCard name='Burgers' image={burgers} view='19k' />
        </div>

        <div className={classes.slideWrapper}>
          <SliderCard name='Dals' image={dals} view='25k' />
        </div>

        <div className={classes.slideWrapper}>
          <SliderCard name='Mixture' image={mixture} view='12k' />
        </div>

        <div className={classes.slideWrapper}>
          <SliderCard name='Noodles' image={noodles} view='18k' />
        </div>

        <div className={classes.slideWrapper}>
          <SliderCard name='Sabziyan' image={sabziyan} view='200k' />
        </div>

      </Slider>
    </div>
  )
}


