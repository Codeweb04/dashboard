import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles/Profile.css"
function profile() {

    return (
        <div className="profile">
            <NotificationsIcon id="notification"/>
            <p>UserName</p>
            <AccountCircleIcon />
            <ExpandMoreIcon id="ExpandMore"/>
        </div>
    )
}

export default profile
