import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";
import { useLayout } from "../../layout/LayoutContext";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
// import { Divider } from "@material-ui/core";

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
        padding: "8px 16px",
        textDecoration: "none",

        ...theme.mixins.toolbar,

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

    menuButton: {
        marginRight: theme.spacing(2.5),
        display: 'none',
        [theme.breakpoints.down("md")]: {
            display: 'block',
        },
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
        width: 0,
        // [theme.breakpoints.up("sm")]: {
        //   width: theme.spacing(9),
        // },
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

    },
    // uiPage:{
    //   padding:theme.spacing(2),
    // }
}));

function Sidebar(props) {
    var classes = useStyles();
    var theme = useTheme();

    var [drawerPermanent, setDrawerPermanent] = useState(true);
    const { openFixed, toggleFixedSidebar } = useLayout();

    useEffect(function () {
        window.addEventListener("resize", drawerTypeChange);
        drawerTypeChange();
        return function cleanup() {
            window.removeEventListener("resize", drawerTypeChange);
        };
    });
    return (

        <Drawer className={classes.root}
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, openFixed && classes.drawerPaperClose),
            }}
            open={openFixed}
        >
            <div className={classes.drawerToolbar}>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => toggleFixedSidebar()}
                >
                    {openFixed ? <MenuIcon /> : <CloseIcon />}
                </IconButton>
                <Typography variant="h4" className={classes.title}>
                    Site Title
                 </Typography>
            </div>
            <List>
                <Link to="/app/Dashboard">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>

                <Link to="/app/Order">
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                </Link>

                <Link to="/app/Menus">
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Menus" />
                    </ListItem>
                </Link>

                <Link to="/app/Customer">
                    <ListItem button>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customer" />
                    </ListItem>
                </Link>

                <Link to="/app/Analysis">
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Analysis" />
                    </ListItem>
                </Link>

                <Link to="/app/OnlineStore">
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Online Store" />
                    </ListItem>
                </Link>
                <Link to="/app/Collections">
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Collections" />
                    </ListItem>
                </Link>

                <Link to="/app/UiComponents">
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ui & Components" />
                    </ListItem>
                </Link>

                <Link to="/app/FormsTables">
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary=" Forms & Tables" />
                    </ListItem>
                </Link>



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
