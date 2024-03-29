import { Avatar, Button, makeStyles, Typography, Link } from '@material-ui/core';
import React from 'react'
import { useAuth } from '../../../auth/AuthContext';
import userAvtarImage from '../../../images/user.jpg';



const usedStyle = makeStyles((theme) => ({

    menuItems: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    userLink: {
        cursor: "pointer",
        color: theme.palette.fontColor.main,
        marginTop: theme.spacing(2.5),

        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.main,
        }

    },
    userEmail: {
        color: theme.palette.fontColor.main,

    },

    userLogin: {
        borderRadius: "8px",
        border: "1px solid " + theme.palette.iconBorderColor.main,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
        padding: theme.spacing(1.25, 2.25),
        textTransform: "capitalize",

        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.main,
        }
    },


}));

export default function UserInfo() {
    const classes = usedStyle();
    const { logOut } = useAuth();
    return (

        <div className={classes.menuItems}>

            <Avatar alt="userImage" src={userAvtarImage} className={classes.large} />

            <Link className={classes.userLink} component="a" variant="h6">
                Vijay Kumar
            </Link>

            <Typography className={classes.userEmail} variant="body1">
                vk.gwebs@gmail.com
            </Typography>

            <Button className={classes.userLogin} variant="contained" size="large" color="primary"  onClick={logOut}>Sign-Out</Button>
        </div>
    )
};
