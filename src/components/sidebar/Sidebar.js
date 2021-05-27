import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import { useLayout } from "../../layout/LayoutContext";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import ParentLink from "./ParentLink";
import NavLink from "./navLink";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({


  drawerToolbar: {
    width: "100%",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "8px 10px",
    textDecoration: "none",

    ...theme.mixins.toolbar,

  },

  menuButton: {
    marginRight: theme.spacing(2.5),
  },

  title: {
    flexGrow: 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    background: theme.palette.glass.main,
    backdropFilter: "blur(8px)",
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


  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },



}));

function Sidebar(props) {
  var classes = useStyles();
  var theme = useTheme();

  var [drawerPermanent, setDrawerPermanent] = useState(true);
  const { open, toggleSidebar } = useLayout();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const closeAccordion = (panel) => {
    setExpanded(false);
  };

  useEffect(function () {
    window.addEventListener("resize", drawerTypeChange);
    drawerTypeChange();
    return function cleanup() {
      window.removeEventListener("resize", drawerTypeChange);
    };
  });

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.drawerToolbar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => toggleSidebar()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Site Title
        </Typography>
      </div>

      <List>
        <div className={classes.root}>
          <ParentLink icon={<DashboardIcon />} title="Dashboard" expanded={expanded} id="panel1" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/Dashboard" icon={<DashboardIcon />} title="Dashboard 1" ></NavLink>
            <NavLink link="/app/DashboardTwo" icon={<DashboardIcon />} title="Dashboard 2" ></NavLink>
          </ParentLink>

          <ParentLink icon={<ShoppingCartIcon />} title="Order" expanded={expanded} id="panel2" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/OrderList" icon={<ShoppingCartIcon />} title="OrderList" ></NavLink>
            <NavLink link="/app/OrderDetails" icon={<ShoppingCartIcon />} title="OrderDetails" ></NavLink>
          </ParentLink>

          <ParentLink icon={<BarChartIcon />} title="Customer" expanded={expanded} id="panel3" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/Customer" icon={<BarChartIcon />} title="Customer List" ></NavLink>
            <NavLink link="/app/Customer" icon={<BarChartIcon />} title="Members" ></NavLink>
          </ParentLink>

          <ParentLink icon={<PeopleIcon />} title="Menus" expanded={expanded} id="panel4" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/Menus" icon={<PeopleIcon />} title="Add New Menus" ></NavLink>
            <NavLink link="/app/Menus" icon={<PeopleIcon />} title="Menus List" ></NavLink>
          </ParentLink>

          <ParentLink icon={<LayersIcon />} title="Analysis" expanded={expanded} id="panel5" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/Analysis" icon={<LayersIcon />} title="Analysis" ></NavLink>
            <NavLink link="/app/Analysis" icon={<LayersIcon />} title="Analysis 2" ></NavLink>
          </ParentLink>

          <ParentLink icon={<LayersIcon />} title="Online Store" expanded={expanded} id="panel6" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/OnlineStore" icon={<PeopleIcon />} title="Store 1" ></NavLink>
            <NavLink link="/app/OnlineStore" icon={<PeopleIcon />} title="Store 2" ></NavLink>
          </ParentLink>

          <ParentLink icon={<LayersIcon />} title="Collections" expanded={expanded} id="panel7" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/Collections" icon={<PeopleIcon />} title="Collections" ></NavLink>
            <NavLink link="/app/Collections" icon={<PeopleIcon />} title="Collections 1" ></NavLink>
          </ParentLink>

          <ParentLink icon={<LayersIcon />} title="UiComponents" expanded={expanded} id="panel8" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/UiComponents" icon={<PeopleIcon />} title="Components 1" ></NavLink>
            <NavLink link="/app/UiComponents" icon={<PeopleIcon />} title="UiComponents 2" ></NavLink>
          </ParentLink>

          <ParentLink icon={<LayersIcon />} title="FormsTables" expanded={expanded} id="panel9" handleChange={(panel) => handleChange(panel)}>
            <NavLink link="/app/FormsTables" icon={<PeopleIcon />} title="Table 1" ></NavLink>
            <NavLink link="/app/FormsTables" icon={<PeopleIcon />} title="Table 2" ></NavLink>
          </ParentLink>

        </div>
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
