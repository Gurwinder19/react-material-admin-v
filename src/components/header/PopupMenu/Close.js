import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useLayout } from "../../../layout/LayoutContext";
import { GrClose } from "react-icons/gr";



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
    fontSize: "1.2rem",
    padding: theme.spacing(1),
  },
}));

export default function Close() {
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
        <GrClose />
      </IconButton>


    </>
  );
}
