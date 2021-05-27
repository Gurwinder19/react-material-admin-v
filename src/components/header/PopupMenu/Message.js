import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import UserOtherAc from "./UserOtherAc";
import userImage2 from '../../../images/user2.png';
import userImage3 from '../../../images/user3.png';
import userImage4 from '../../../images/user4.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuButton from "./MenuButton";



const useStyles = makeStyles((theme) => ({
   
    menuBody: {
        width: 300,
        background: theme.palette.glass.main,
        backdropFilter: "blur(8px)",
        padding: theme.spacing(3.9),
        marginTop: theme.spacing(2.5),

    },


}));

export default function Message() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    return (
        <>
            <MenuButton icon={<MailOutlineIcon />} label="Message" onclick={handleMenu} />


            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
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

                <UserOtherAc userAvtarImage={userImage2} userName='Vijay kumar1' email="vk.gwebs@gmail.com" />
                <UserOtherAc userAvtarImage={userImage3} userName='Amreek saini' email="amreeksaini67@gmail.com" />
                <UserOtherAc userAvtarImage={userImage4} userName='Hakam' email="hakam.gwebs@gmail.com" />

            </Menu>

        </>
    );
}
