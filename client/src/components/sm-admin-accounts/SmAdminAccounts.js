import React, {Component} from 'react';
import './SmAdminAccounts.css';
import * as CommunicationService from "../../services/CommunicationService";
import {enhanceUser} from "../../services/UserService";
import SmAlert from "../sm-alert/SmAlert";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import SmReactionDialog from "../sm-reaction-dialog/SmReactionDialog";
import SmUserActivityDialog from "../sm-user-activity-dialog/SmUserActivityDialog";

class SmAdminAccounts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            alert: {
                types: {
                    SUCCESS: 'success',
                    ERROR: 'error',
                },
                open: false,
                severity: '',
                message: ''
            },
            userActivityDialogOpen: false,
            activityItems: {
                posts: [],
                comments: [],
                reactions: [],
                answers: [],
            },
            currentUser: {}
        }
    }

    async componentDidMount() {
        CommunicationService.getAllShallow()
            .then((res) => {
                console.log(res);
                this.setState({
                    users: res.map((user) => enhanceUser(user))
                });
            })
            .catch(console.error)
    }

    __handleCloseUserActivityDialog = (event) => {
        this.setState({
            userActivityDialogOpen: false
        })
    }

    handleAlertClose = () => {
        this.setState({
            alert: {
                ...this.state.alert,
                open: false
            }
        });
    }

    handleAlertShow = (message, severity) => {
        this.setState({
            alert: {
                ...this.state.alert,
                open: true,
                severity: severity,
                message: message
            }
        });
    }

    switchAccountActivation = (user) => (event) => {
        CommunicationService.changeActiveStatus(user.user_internal_id)
            .then((res) => {
                if (res.message === "Active status changed successfully.") {
                    this.updateUserInState({
                        ...user,
                        active: !user.active
                    });
                }
            })
            .catch(console.error)
    }

    updateUserInState = (newUser) => {
        let user = this.state.users.findIndex((user) => user.user_internal_id == newUser.user_internal_id);
        this.setState({
            users: [
                ...this.state.comments.slice(0, user),
                newUser,
                ...this.state.comments.slice(user + 1),
            ]
        })
    }

    showUserActivity = (user) => (event) => {
        CommunicationService.getUserActivity(user.user_internal_id)
            .then((res) => {
                this.setState({
                    currentUser: user,
                    activityItems: res.body,
                    userActivityDialogOpen: true
                })
            })
            .catch(console.error)
    }

    getAccountCardFromUser = (user) => {
        return <Card>
            <CardHeader
                avatar={<Avatar aria-label="recipe">{user.avatar}</Avatar>}
                title={user.full_name}
                subheader={user.city + ' ' + user.address}
            />
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" component="p">
                        Email: {user.email}
                    </Typography>
                    <Typography variant="body2" component="p">
                        User type: {user.type}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Account creation date: {user.timestamp}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Subscription type: {user.subscription_id}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="large" color="secondary" onClick={this.switchAccountActivation(user)}>
                    {user.active ? 'Deactivate account' : 'Activate account'}
                </Button>
                <Button size="large" color="primary" onClick={this.showUserActivity(user)}>
                    Show user activity
                </Button>
            </CardActions>
        </Card>
    }

    render() {
        return (
            <div className={"sm-admin-accounts"}>
                <SmUserActivityDialog
                    activityItems={this.state.activityItems}
                    currentUser={this.state.currentUser}
                    open={this.state.userActivityDialogOpen}
                    onClose={this.__handleCloseUserActivityDialog}></SmUserActivityDialog>

                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>
                <div className={"sm-admin-accounts-cards"}>
                    {this.state.users.map((user) => this.getAccountCardFromUser(user))}
                </div>
            </div>
        );
    }
}

export default SmAdminAccounts;
