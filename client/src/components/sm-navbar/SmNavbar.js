import React, {Component} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PowerSharpIcon from '@material-ui/icons/PowerSharp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import './SmNavbar.css';
import {Button} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import {Link, Route} from "react-router-dom";

class SmNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser,
            anchorEl: null,
            mobileMoreAnchorEl: null,
            isMenuOpen: Boolean(null),
            isMobileMenuOpen: Boolean(null)
        };
    }

    handleProfileMenuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            isMenuOpen: Boolean(event.currentTarget)
        })
    };

    handleMobileMenuClose = () => {
        this.setState({
            mobileMoreAnchorEl: null,
            isMobileMenuOpen: Boolean(null)
        })
    };

    handleMenuClose = () => {
        this.setState({
            anchorEl: null,
            mobileMoreAnchorEl: null,
            isMenuOpen: Boolean(null),
            isMobileMenuOpen: Boolean(null)
        })
    };

    handleMobileMenuOpen = (event) => {
        this.setState({
            mobileMoreAnchorEl: event.currentTarget,
            isMobileMenuOpen: Boolean(null)
        })
    };

    render() {
        const menuId = 'primary-search-account-menu';
        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={menuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <Link to="/profile">
                    <MenuItem onClick={this.handleMenuClose}>
                        My account
                    </MenuItem>
                </Link>
                <MenuItem onClick={this.props.logOut}>Log out</MenuItem>
            </Menu>
        );

        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        let rightNavbarSide = null;

        if (this.state.currentUser === undefined || this.state.currentUser === null) {
            rightNavbarSide = <div>
                <Button onClick={this.props.logIn}
                    variant="contained" color="primary">
                    Log in
                </Button>
            </div>
        } else {
            rightNavbarSide = <div>
                <Chip
                    className={"userChip"}
                    style={{marginLeft: "10px"}}
                    avatar={<Avatar>{this.state.currentUser.avatar}</Avatar>}
                    label={this.state.currentUser.full_name}
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    clickable
                    color="primary"
                    onClick={this.handleProfileMenuOpen}
                    variant="outlined"
                />
            </div>
        }



        return (
            <div style={{flexGrow: 1}}>
                <AppBar color="inherit" position="static">
                    <Toolbar className={"sm-navbar-toolbar"}>

                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Typography variant="h4" noWrap>
                                    Social Media Title
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>

                            </Grid>
                            <Grid item xs className={"row"}>
                                {rightNavbarSide}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        );
    }
}

export default SmNavbar;
