import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import { useLayout } from "../../../layout/LayoutContext";



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
    marginLeft: theme.spacing(2),
    borderRadius: "10px",
    color: theme.palette.fontColor.main,

  },
}));

export default function Setting() {
  const classes = useStyles();
  const { toggleRightSidebar } = useLayout();


  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleRightSidebar}
        color="primary"
        className={classes.iconButton}
        size="medium"
      >
        <SettingsIcon />
      </IconButton>
     

    </>
  );
}
