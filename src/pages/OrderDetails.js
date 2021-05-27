import { makeStyles } from '@material-ui/core';
import React from 'react'
import CustomizedSteppers from '../components/stepper/CustomizedSteppers'
import NoneLinear from '../components/stepper/NoneLinear'


const useStyles = makeStyles((theme) => ({
  
    box:{
        padding:theme.spacing(2),
        marginBottom:theme.spacing(2),
        background: theme.palette.glass.main,
        backdropFilter: "blur(8px)",
    },
  
  }));
  
export default function OrderDetails() {
    const classes = useStyles();
    return (
 

        <>
            <div className={classes.box}>
                <CustomizedSteppers />
            </div>

            <div>
                <NoneLinear />
            </div>

        </>

    )
}
