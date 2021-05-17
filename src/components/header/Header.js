import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import UserProfileMenu from "./PopupMenu/UserProfileMenu";
import { useLayout } from "../../layout/LayoutContext";
import Setting from "./PopupMenu/Setting";
import clsx from 'clsx';
import Message from "./PopupMenu/Message";
import Notification from "./PopupMenu/Notification";


const useStyles = makeStyles((theme) => ({

  appBar: {
    position: "sticky",
    width: "100%",
    top: 0,
    background: theme.palette.glass.main,
    backdropFilter: "blur(8px)",
    boxShadow: "1px 1px 8px #9e9e9e",
    padding: theme.spacing(1, 0),
    zIndex: theme.zIndex.drawer + 1,

    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },

  headerItems: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },


}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { open } = useLayout();

  return (
    <nav
      position="fixed"

      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
        [classes.appBarShiftClose]: !open,

      })}
    >

      <Toolbar className={classes.headerItems}>

        <Notification />
        <Message />
        <Setting />
        <UserProfileMenu />
       


      </Toolbar>
    </nav>
  );
}
