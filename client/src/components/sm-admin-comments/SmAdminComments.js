import React, {Component} from 'react';
import './SmAdminComments.css';
import Constants from "../../Constants";
import {Auth} from "aws-amplify";
import * as CommunicationService from "../../services/CommunicationService";
import {enhanceUser} from "../../services/UserService";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import SmAlert from "../sm-alert/SmAlert";

class SmAdminComments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            alert: {
                types: {
                    SUCCESS: 'success',
                    ERROR: 'error',
                },
                open: false,
                severity: '',
                message: ''
            }
        };
    }

    async componentDidMount() {
        CommunicationService.getUnapprovedComments()
            .then((res) => {
                this.setState({
                    users: res.users.map((user) => enhanceUser(user)),
                    comments: res.comments
                });
            })
            .catch(console.error)
    }

    approveComment = (commentId) => (event) => {
        CommunicationService.approveComment(commentId)
            .then((res) => {
                this.removeCommentFromState(commentId);
                this.handleAlertShow(res.message, res.severity);
            })
            .catch(console.error)
    }

    deleteComment = (commentId) => (event) => {
        CommunicationService.deleteComment(commentId)
            .then((res) => {
                this.removeCommentFromState(commentId);
                this.handleAlertShow(res.message, res.severity);
            })
            .catch(console.error)
    }

    removeCommentFromState = (commentId) => {
        let commentIndex = this.state.comments.findIndex((comment) => comment.id == commentId);
        this.setState({
            comments: [
                ...this.state.comments.slice(0, commentIndex),
                ...this.state.comments.slice(commentIndex + 1),
            ]
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

    render() {
        return (
            <div>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>

                <List>
                    {this.state.comments.map((comment) => {
                        let currentUser = this.state.users.find((user) => user.user_internal_id === comment.user_internal_id);

                        return (
                            <ListItem button key={comment.id}>
                                <ListItemAvatar>
                                    <Avatar aria-label="recipe" className={"card-avatar"}>
                                        {currentUser.avatar}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={currentUser.full_name} secondary={comment.text}/>
                                <ListItemSecondaryAction>
                                    <Button color="primary" onClick={this.approveComment(comment.id)}>Approve</Button>
                                    <Button color="secondary" onClick={this.deleteComment(comment.id)}>Delete</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
}

export default SmAdminComments;
