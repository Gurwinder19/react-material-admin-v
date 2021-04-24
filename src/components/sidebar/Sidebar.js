import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { useLayout } from "../../layout/LayoutContext";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerToolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonHidden: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    color: "white",
    background:"linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%)",
    backdropFilter:"blur(8px)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  drawerBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: 18,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Sidebar(props) {
  var classes = useStyles();
  var theme = useTheme();

  var [drawerPermanent, setDrawerPermanent] = useState(true);
  const { open, toggleSidebar } = useLayout();

  useEffect(function () {
    window.addEventListener("resize", drawerTypeChange);
    drawerTypeChange();
    return function cleanup() {
      window.removeEventListener("resize", drawerTypeChange);
    };
  });
  return (
    <Drawer
      variant={drawerPermanent ? "permanent" : "temporary"}
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.drawerToolbar} />
      <div className={classes.drawerBackButton}>
        <IconButton onClick={() => toggleSidebar()}>
          <ArrowBackIcon
            classes={{
              root: clsx(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItem>
      </List>
    </Drawer>
  );
  function drawerTypeChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && drawerPermanent) {
      setDrawerPermanent(false);
    } else if (!isSmallScreen && !drawerPermanent) {
      setDrawerPermanent(true);
    }
  }
}

export default Sidebar;
