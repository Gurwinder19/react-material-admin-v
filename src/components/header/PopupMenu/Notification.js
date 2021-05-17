import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import UserOtherAc from "./UserOtherAc";
import userImage2 from '../../../images/user2.png';
import userImage3 from '../../../images/user3.png';
import userImage4 from '../../../images/user4.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuButton from './MenuButton';



const useStyles = makeStyles((theme) => ({
    headerMenu: {
        marginTop: theme.spacing(7),

    },
    menuBody: {
        width: 300,
        background: theme.palette.glass.main,
        backdropFilter:"blur(8px)",
        padding: theme.spacing(3.9),
    },
   
}));

export default function Notification() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setTimeout(setAnchorEl(event.currentTarget), 200);
        console.log("abc")
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        console.log("test")
    };
    return (
        <>
           <MenuButton icon={<NotificationsIcon />} label="Notifications" onclick={handleMenu} />
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
                className={classes.headerMenu}
                classes={{ paper: classes.menuBody, list: classes.list }}
            >

                <UserOtherAc userAvtarImage={userImage2} userName='Vijay kumar' email="vk.gwebs@gmail.com" />
                <UserOtherAc userAvtarImage={userImage3} userName='Amreek saini' email="amreeksaini67@gmail.com" />
                <UserOtherAc userAvtarImage={userImage4} userName='Hakam' email="hakam.gwebs@gmail.com" />

            </Menu>

        </>
    );
}
