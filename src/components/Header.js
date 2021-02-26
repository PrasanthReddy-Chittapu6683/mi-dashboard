import React from 'react'
import { IconButton } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
const Header = ({ classes, themeClickEvent, darkState }) => {

    return (
        <>
            <IconButton color="inherit" >
                <Badge badgeContent={4} color="secondary"  >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            {
                darkState ?
                    <IconButton color="inherit" onClick={() => { themeClickEvent() }}>
                        <Brightness4Icon />
                    </IconButton>
                    :
                    <IconButton color="inherit" onClick={() => { themeClickEvent() }}>
                        <Brightness7Icon />
                    </IconButton>
            }


        </>
    )
}

export default Header
