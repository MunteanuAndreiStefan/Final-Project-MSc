import React, {Component} from 'react';
import './SmPost.css';
import {enhanceUser} from '../../services/UserService.js'

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SmComment from "../sm-comment/SmComment";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import {ChatBubble, FavoriteBorder} from "@material-ui/icons";
import SmContactInfoDialog from "../sm-contact-info-dialog/SmContactInfoDialog";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import * as CommunicationService from "../../services/CommunicationService";
import SmReactionDialog from "../sm-reaction-dialog/SmReactionDialog";


class SmPost extends Component {
    constructor(props) {
        super(props);
        let currentUser = props.currentUser;
        let current_user_id = currentUser ? currentUser.user_internal_id : null;
        let post = props.post;
        let users = props.users;
        let userReacted = post.reactions.findIndex(reaction => reaction.user_internal_id == current_user_id)
        let reactionButtonType = this.__getReactionButtonByBehaviour(userReacted !== -1);
        let post_user = enhanceUser(users.find(user => user.user_internal_id == post.user_internal_id));
        let comments = post.comments.map(comment => this.mapComplementaryDataWithUserInfo(comment, users));
        let reactions = post.reactions.map(reaction => this.mapComplementaryDataWithUserInfo(reaction, users));
        this.state = {
            currentUser: currentUser,
            post_user: post_user,
            post: {
                ...props.post,
                avatar: post_user.avatar,
                userName: post_user.full_name,
                date: post.timestamp,
                comments: comments,
                reactions: reactions
            },
            users: props.users,
            current_user_id: current_user_id,
            reactionButton: {
                ...reactionButtonType,
                label: this.__getReactionString(reactions, current_user_id)
            },
            commentBox: {
                label: 'Write your thoughts',
                value: ''
            },
            reactionDialogOpen: false,
            contactInfoDialogOpen: false,
            contact: {},
            anchorElement: null
        };
    }

    __getReactionButtonByBehaviour(reacted) {
        let type = reacted ? <FavoriteIcon color="action"/> : <FavoriteBorder/>;
        return {
            type: type,
            value: reacted,
        }
    }

    __handleOpenPostMenu = (event) => {
        this.setAnchorElement(event.currentTarget);
    }

    __handleClosePostMenu = (event) => {
        this.setAnchorElement(null);
    }

    __handlePostDelete = (event) => {
        this.__handleClosePostMenu(event);
        this.props.handleDelete(event, this.state.post.id);
    }

    setAnchorElement(element) {
        this.setState({
            anchorElement: element
        })
    }

    __handleComment = (event) => {
        this.setState({
            commentBox: {
                ...this.state.commentBox,
                value: event.target.value
            }
        })
    }

    __handleViewReactions = (event) => {
        this.setState({
            reactionDialogOpen: true
        })
    }

    __handleReactionDialogClose = (event) => {
        this.setState({
            reactionDialogOpen: false
        })
    }

    __handleViewContactInfo = (contact) => {
        this.setState({
            contactInfoDialogOpen: true,
            contact: contact
        })
    }

    __handleContactInfoDialogClose = (event) => {
        this.setState({
            contactInfoDialogOpen: false
        })
    }

    __handleReaction = async (event) => {
        let currentState = this.state.reactionButton.value;

        if (!currentState) {
            let res = await CommunicationService.reactToPost(this.props.post.id, 'LIKE')
            if (res.reactionId) {
                let reactionObj = {
                    id: res.reactionId,
                    user_internal_id: this.props.currentUser.user_internal_id,
                    reaction: 'LIKE',
                    timestamp: new Date().toISOString().replace('T', ' ').slice(0, -5)
                }
                this.props.post.reactions.push(reactionObj);
            } else {
            }
        } else {
            let reactionIndex = this.props.post.reactions.findIndex(reaction => reaction.user_internal_id == this.props.currentUser.user_internal_id)
            let reactionId = this.props.post.reactions[reactionIndex].id;
            let res = await CommunicationService.unreactToPost(this.props.post.id, reactionId)
            if (res.deletedReactionsCount > 0) {
                this.props.post.reactions = [
                    ...this.props.post.reactions.slice(0, reactionIndex),
                    ...this.props.post.reactions.slice(reactionIndex + 1),
                ]
            } else {
            }
        }
        let nextReactions = this.props.post.reactions.map(reaction => this.mapComplementaryDataWithUserInfo(reaction, this.props.users));

        let nextState = !currentState
        this.setState({
            post: {
                ...this.state.post,
                reactions: nextReactions
            },
            reactionButton: {
                ...this.__getReactionButtonByBehaviour(nextState),
                label: this.__getReactionString(nextReactions, this.state.current_user_id)
            },
        })
    }

    __handleAddComment = async (event) => {
        let res = await CommunicationService.commentToPost(this.props.post.id, this.state.commentBox.value)
        if (!res.commentId) {
            return;
        }

        let commentObj = {
            id: res.commentId,
            user_internal_id: this.props.currentUser.user_internal_id,
            text: this.state.commentBox.value,
            timestamp: new Date().toISOString().replace('T', ' ').slice(0, -5)
        }
        let stateComment = this.mapComplementaryDataWithUserInfo(commentObj, this.props.users)
        let updatedComments = this.state.post.comments;
        updatedComments.push(stateComment);
        this.setState({
            commentBox: {
                ...this.state.commentBox,
                value: ''
            },
            post: {
                ...this.state.post,
                comments: updatedComments
            }
        })
    }

    __handleDeleteComment = async (event, currentComment) => {
        let commentIndex = this.state.post.comments.findIndex(comment => comment.id == currentComment.id);
        if (commentIndex === -1) {
            return;
        }
        let commentId = this.state.post.comments[commentIndex].id;
        let res = await CommunicationService.deleteCommentFromPost(this.props.post.id, commentId)

        if (res.deletedCommentsCount > 0) {
            this.setState({
                post: {
                    ...this.state.post,
                    comments: [
                        ...this.state.post.comments.slice(0, commentIndex),
                        ...this.state.post.comments.slice(commentIndex + 1),
                    ]
                }
            })
            return;
        }
    }

    __handleViewUserContactInfo = (userId) => async (event) => {
        CommunicationService.getUserContactInfo(userId)
            .then((res) => {
                this.__handleViewContactInfo(res)
            })
            .catch(console.error)
    }

    mapComplementaryDataWithUserInfo(complementaryData, users) {
        let foundUser = users.find(user => user.user_internal_id == complementaryData.user_internal_id);
        return {
            ...complementaryData,
            user: enhanceUser(foundUser)
        }
    }

    __getReactionString(reactions, current_user_id) {
        let len = reactions.length;
        if (len < 0) {
            return null;
        }

        let currentUserInReactions = (reactions, current_user_id) => {
            let currentUserInReactions = reactions.find(reaction => reaction.user_internal_id == current_user_id)
            return currentUserInReactions !== undefined && currentUserInReactions !== null;
        }

        switch (len) {
            case 0: {
                return "Nobody reacted yet";
            }
            case 1: {
                if (currentUserInReactions(reactions, current_user_id)) {
                    return "You reacted"
                }
                return reactions[0].user.full_name + " reacted";
            }
            case 2: {
                if (currentUserInReactions(reactions, current_user_id)) {
                    return "You and 1 other reacted"
                }
                return `${reactions[0].user.full_name} and 1 other reacted`
            }
            default: {
                if (currentUserInReactions(reactions, current_user_id)) {
                    return `You and ${len - 1} others reacted`
                }
                return `${reactions[0].user.full_name} and ${len - 1} others reacted`
            }
        }
    }

    render() {
        let cardMedia = null;
        let cardContent = null;
        let cardComments = [];
        let cardReactions = [];

        if (this.state.post.resources && this.state.post.resources.length > 0) {
            let imageResources = this.state.post.resources.filter((res) => res.type === 'IMAGE')
            let htmlResources = this.state.post.resources.filter((res) => res.type === 'HTML')
            let html = htmlResources.length > 0 ? htmlResources[0].resource : null;
            let auxImg = imageResources.length > 0 ? imageResources[0].resource : null
            if (html && !auxImg) {
                cardMedia = <div dangerouslySetInnerHTML={{__html: html}}/>
            } else if (!html && auxImg) {
                cardMedia = <CardMedia
                    className={"card-media"}
                    image={auxImg}
                />
            }
        }
        if (this.state.post.text) {
            cardContent = <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">
                    {this.state.post.text}
                </Typography>
            </CardContent>
        }

        cardComments = this.state.post.comments.map(comment => <SmComment key={"sm-comment-" + comment.id}
                                                                          handleDelete={this.__handleDeleteComment}
                                                                          postUserId={this.state.post.user_internal_id}
                                                                          currentUser={this.props.currentUser}
                                                                          handleViewUserContactInfo={this.__handleViewUserContactInfo}
                                                                          comment={comment}></SmComment>)


        let postOptionButton = this.props.currentUser.user_internal_id === this.state.post.user_internal_id ?
            <IconButton aria-label="settings">
                <MoreVertIcon onClick={this.__handleOpenPostMenu}/>
            </IconButton> : null;

        return (
            <div>
                <SmReactionDialog key={"sm-reaction-dialog-" + this.state.post.id}
                                     reactions={this.state.post.reactions}
                                     open={this.state.reactionDialogOpen}
                                     onClose={this.__handleReactionDialogClose}></SmReactionDialog>
                <SmContactInfoDialog key={"sm-contact-info-dialog-" + this.state.post.id}
                                     contact={this.state.contact}
                                     open={this.state.contactInfoDialogOpen}
                                     onClose={this.__handleContactInfoDialogClose}></SmContactInfoDialog>
                <Card className={"card-root"}>
                    <div className={"sm-post-panel"}>
                        <Button className={"sm-post-contact-info-button"}
                                onClick={this.__handleViewUserContactInfo(this.state.post.user_internal_id)}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={"card-avatar"}>
                                        {this.state.post.avatar}
                                    </Avatar>
                                }
                                action={postOptionButton}
                                title={this.state.post.userName}
                                subheader={this.state.post.date}
                                titleTypographyProps={{variant: "h5"}}
                                subheaderTypographyProps={{variant: "h6"}}
                            />
                        </Button>
                        <Menu
                            id="comment-menu"
                            anchorEl={this.state.anchorElement}
                            keepMounted
                            open={Boolean(this.state.anchorElement)}
                            onClose={this.__handleClosePostMenu}>
                            <MenuItem onClick={this.__handlePostDelete}>Delete</MenuItem>
                        </Menu>
                        {cardMedia}
                        {cardContent}
                    </div>
                    <div className={"sm-post-interaction-panel"}>
                        <Collapse
                            in={true}
                            timeout="auto" unmountOnExit>
                            <CardActions className={"sm-post-interaction-panel-actions"} disableSpacing>
                                <IconButton onClick={this.__handleReaction} aria-label="add to favorites"
                                            disabled={this.props.currentUser.subscription_id < 2}
                                >
                                    {this.state.reactionButton.type}
                                </IconButton>
                                <Button onClick={this.__handleViewReactions}
                                        color="primary"
                                        startIcon={<FaceIcon/>}>{this.state.reactionButton.label}
                                </Button>
                            </CardActions>
                            <CardContent className={"comment-area"}>
                                <div className={"post-comments"}>
                                    {cardComments}
                                </div>
                                <div className={"post-comment-input"}>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        className={"post-comment-input-field"}
                                        label={this.state.commentBox.label}
                                        multiline
                                        rowsMax={3}
                                        value={this.state.commentBox.value}
                                        onChange={this.__handleComment}
                                        variant="outlined"
                                        disabled={this.props.currentUser.subscription_id < 3}
                                    />
                                    <Button onClick={this.__handleAddComment}
                                            disabled={this.props.currentUser.subscription_id < 3}
                                            className={"comment-label-button"}
                                            color="primary" startIcon={<ChatBubble/>}>{"Comment"}</Button>
                                </div>
                            </CardContent>
                        </Collapse>
                    </div>
                </Card>
            </div>
        );
    }
}

export default SmPost;
