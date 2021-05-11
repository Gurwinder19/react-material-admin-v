import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
const useStyles = makeStyles((theme) => ({


    search: {
        position: "relative",
        borderRadius: "10px",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        boxShadow:"1px 1px 5px #888888",

        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        marginLeft: 0,
        width: "100%",

        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.fontColor.main,
        top: 0,
        right: 0,
    },

    inputInput: {
        color:"#000",
        padding: theme.spacing(1.8, 1, 1.8, 2),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "30ch",
            "&:focus": {
                width: "40ch",
            },
        },
    },
}));

export default function SearchInput() {
    const classes = useStyles();

    return (

        <div className={classes.search}>

            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
        </div>


    );
}
