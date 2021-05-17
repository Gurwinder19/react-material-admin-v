import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useLayout } from "../../../layout/LayoutContext";
import { BsLayoutSidebar } from "react-icons/bs";



const useStyles = makeStyles((theme) => ({
  headerMenu: {
    marginTop: theme.spacing(7),

  },
  menuBody: {
    width: 300,
    background: theme.palette.background.default,
    padding: theme.spacing(3.9),
  },
  list: {

  },

  iconButton: {
    boxShadow: theme.palette.boxShadow.boxShadow,
    borderRadius: "10px",
    color: theme.palette.fontColor.main,
    marginLeft: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down("md")]: {
        display: 'block',
    },
  },
}));

export default function RightLayoutIcon() {
  const classes = useStyles();
  const { toggleFixedSidebar } = useLayout();


  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleFixedSidebar}
        color="primary"
        className={classes.iconButton}
        size="medium"
      >
        <BsLayoutSidebar />
      </IconButton>


    </>
  );
}
