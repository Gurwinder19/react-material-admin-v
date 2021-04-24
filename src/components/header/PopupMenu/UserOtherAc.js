import { Avatar, makeStyles, Typography, Link } from '@material-ui/core';
import React from 'react'



const usedStyle = makeStyles((theme) => ({

    menuItems: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: '0',
        }
    },

    userLink: {
        display: "block",
        cursor: "pointer",
        '&:hover': {
           textDecoration: "none",
        }
    
    },

    userLogin: {
        fontSize: "12px",
        marginTop: "5px",
    },

    userAvtarImage: {
        marginRight: "10px",
    },

    userWrap: {
        flexGrow: "1",
    },

    userTitle: {
        display: "flex",
        justifyContent: "space-between",
    }

}));


export default function UserOtherAc(props) {
    const classes = usedStyle();

    return (

        <div className={classes.menuItems}>

            <Avatar alt="Remy Sharp" src={props.userAvtarImage} className={classes.userAvtarImage} />

            <div className={classes.userWrap} >
                <div className={classes.userTitle}>
                    <Link className={classes.userLink} component="a" variant="body1">{props.userName}</Link>
                    <Typography className={classes.userLogin} variant="p">Sign-Out</Typography>
                </div>
                <Typography className={classes.userEmail} variant="p">{props.email}</Typography>

            </div>
        </div>
    )
};
