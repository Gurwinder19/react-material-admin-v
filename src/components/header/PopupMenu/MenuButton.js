import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles((theme) => ({

    iconButton: {
        boxShadow: theme.palette.boxShadow.boxShadow,
        marginLeft: theme.spacing(2),
        borderRadius: "10px",
        color: theme.palette.fontColor.main,

    },
}));


export default function MenuButton(props) {
    const classes = useStyles();
    return (
        <IconButton
            aria-label={props.label}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={props.onclick}
            color="primary"
            className={classes.iconButton}
            size="medium"
        >
            {props.icon}
        </IconButton>
      
    )
}
