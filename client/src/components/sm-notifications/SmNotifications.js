import React, {useEffect} from 'react';
import './SmNotifications.css';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as CommunicationService from '../../services/CommunicationService';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WarningIcon from '@material-ui/icons/Warning';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function SMNotifications() {
    const [anchorEl, setAnchorEl] = React.useState();
    const [notifications, setNotifications] = React.useState([]);

    const updateNotifications = () => {
        CommunicationService.getNotifications()
            .then((notifications) => {
                if (notifications instanceof Array) {
                    setNotifications(notifications);
                }
            })
            .catch(console.error);
    }

    const handleClick = (event) => {
        updateNotifications()
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        // const timer = setInterval(() => {
        //     updateNotifications()
        // }, 5000);
        // // clearing interval
        // return () => clearInterval(timer);
    });

    const handleClose = () => {
        setAnchorEl(null);
    };

    const notificationsList = () => {
        return notifications.map(notification => {
            let date = new Date(notification.timestamp);
            let displayDate = date.toLocaleString()
            if (notification.type === 'alert') {
                return (
                    <StyledMenuItem>
                        <ListItemIcon>
                            <WarningIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText primary={notification.message} secondary={displayDate}/>
                    </StyledMenuItem>
                )
            }

            return (
                <StyledMenuItem>
                    <ListItemText primary={notification.message} secondary={displayDate}/>
                </StyledMenuItem>
            )
        });
    }

    return (
        <div className={"notification-icon-wrapper"}>
            <IconButton
                aria-controls="sm-notifications"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                icon="add_circle"
                onClick={handleClick}
            >
                <NotificationsIcon fontSize="large"/>
            </IconButton>
            <StyledMenu
                id="sm-notifications"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {notificationsList()}
            </StyledMenu>
        </div>
    );
}
