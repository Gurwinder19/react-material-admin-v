import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
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
import Close from "../header/PopupMenu/Close";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    root: {
        display: "block",
        position: "absolute",
        right: 0,
        height: "100vh",
        zIndex: 9999,
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
        // color: "white",
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

    closeParent: {
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1.5)
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

function SidebarRight(props) {
    var classes = useStyles();
    var theme = useTheme();
       
    var [drawerPermanent, setDrawerPermanent] = useState(true);
    const { openRight } = useLayout();

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
                paper: clsx(classes.drawerPaper, !openRight && classes.drawerPaperClose),
            }}
            open={openRight}
                 >


            <List>
                <div className={classes.closeParent}>
                    <Close />
                </div>

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

export default SidebarRight;
