import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';
import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRating from './StarRating';


const useStyles = makeStyles({
    root: {
        background: theme.palette.glass.main,
        boxShadow: 'none',
        border: 'none',
        borderRadius: '10px',
        margin: '0 10px',
    },
    media: {
        height: 180,
    },
    titleName: {
        fontSize: '1.2rem',
        fontWeight:600,
        color: theme.palette.fontColor.main,

    },
    iconBox: {
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: theme.spacing(1),

    },
    icon: {
        padding: theme.spacing(1),
        borderRadius:10,
        backgroundColor:"#cdd0e980",
        marginRight: theme.spacing(0.8),
    },
    favoriteIcon: {
        marginRight:theme.spacing(1),
    },
    ratingTitle: {
        fontSize:".95rem",
    },
});

export default function MediaCard({ name = "Biryani", image = "", title = "Biryani", desc = "Lorem ipsum", view }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" className={classes.titleName}>
                        {name}
                    </Typography>
                    <div className={classes.rating}><StarRating /></div>

                    <div className={classes.iconBox} >

                        <Button className={classes.icon}>
                            <FavoriteIcon className={classes.favoriteIcon} fontSize="small"/>

                            <Typography className={classes.ratingTitle}>{view} views</Typography>
                        </Button>
                    </div>
                </CardContent>

            </div>


        </Card>
    );
}