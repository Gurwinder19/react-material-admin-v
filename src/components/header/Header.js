import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import UserProfileMenu from "./PopupMenu/UserProfileMenu";
import { useLayout } from "../../layout/LayoutContext";
import Setting from "./PopupMenu/Setting";
import clsx from 'clsx';
import SearchInput from "../search/SearchInput";
import Message from "./PopupMenu/Message";
import Notification from "./PopupMenu/Notification";
import RightLayoutIcon from "./PopupMenu/RightLayoutIcon";


const useStyles = makeStyles((theme) => ({

  appBar: {
    position: "sticky",
    width: "100%",
    top: 0,
    background: "rgba(255,255,255,0)",
    backdropFilter: "blur(5px)",
    boxShadow: "1px 1px 8px #9e9e9e",
    padding: theme.spacing(2, 0),
    zIndex: theme.zIndex.drawer + 1,

    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),


  },

  headerItems: {
    display: "flex",
    justifyContent: "space-between",
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
        <SearchInput />

        <div>
          <Notification />
          <Message />
          <Setting />
          <UserProfileMenu />
          <RightLayoutIcon />
        </div>

      </Toolbar>
    </nav>
  );
}
