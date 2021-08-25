import { ListItem, ListItemIcon, ListItemText, } from '@material-ui/core'
import React from 'react';
import { Link } from "react-router-dom";



export default function NavLink({ icon, title, link }) {
  
    return (
        <Link to={link}>
            <ListItem button>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText secondary={title} />
            </ListItem>
        </Link>

    )
}
