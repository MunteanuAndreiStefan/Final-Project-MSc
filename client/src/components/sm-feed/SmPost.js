import React, {Component} from 'react';
import './SmPost.css';
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
import SmReactionDialog from "../sm-reaction-dialog/SmReactionDialog";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


class SmPost extends Component {
    constructor(props) {
        super(props);

        let post = props.post;
        let users = props.users;
        let userReacted = props.post.reactions.findIndex(reaction => reaction.user_internal_id === props.current_user_id)
        let reactionButtonType = this.__getReactionButtonByBehaviour(userReacted !== -1);
        let post_user = this.getEnhancedUser(users.find(user => user.user_internal_id === post.user_internal_id));

        let comments = post.comments.map(comment => this.mapComplementaryDataWithUserInfo(comment, users));
        let reactions = post.reactions.map(reaction => this.mapComplementaryDataWithUserInfo(reaction, users));

        this.state = {
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
            current_user_id: props.current_user_id,
            reactionButton: {
                type: reactionButtonType,
                value: false,
                label: this.__getReactionString(reactions, props.current_user_id)
            },
            commentBox: {
                label: 'Write your thoughts',
                value: ''
            },
            reactionDialogOpen: false,
            anchorElement: null
        };
    }

    __getReactionButtonByBehaviour(reacted) {
        return reacted ? <FavoriteIcon color="action"/> : <FavoriteBorder/>;
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

    __handleReaction = (event) => {
        let currentState = this.state.reactionButton.value;

        if (!currentState) {
            let reactionObj = {
                user_internal_id: this.state.current_user_id,
                reaction: 'LIKE',
                timestamp: new Date().toISOString().replace('T', ' ').slice(0, -5)
            }
            this.props.post.reactions.push(reactionObj);
        } else {
            let reactionIndex = this.props.post.reactions.findIndex(reaction => reaction.user_internal_id === this.state.current_user_id)
            this.props.post.reactions = [
                ...this.props.post.reactions.slice(0, reactionIndex),
                ...this.props.post.reactions.slice(reactionIndex + 1),
            ]
        }
        let nextReactions = this.props.post.reactions.map(reaction => this.mapComplementaryDataWithUserInfo(reaction, this.state.users));

        let nextState = !currentState;
        this.setState({
            post: {
                ...this.state.post,
                reactions: nextReactions
            },
            reactionButton: {
                type: this.__getReactionButtonByBehaviour(nextState),
                value: nextState,
                label: this.__getReactionString(nextReactions, this.props.current_user_id)
            },
        })
    }

    __handleAddComment = (event) => {
        let commentObj = {
            user_internal_id: this.state.current_user_id,
            text: this.state.commentBox.value,
            timestamp: new Date().toISOString().replace('T', ' ').slice(0, -5)
        }
        //this.props.post.comments.push(commentObj);
        let stateComment = this.mapComplementaryDataWithUserInfo(commentObj, this.state.users)
        let updatedComments = this.state.post.comments;
        updatedComments.push(stateComment);
        this.setState({
            commentBox: {
                ...this.state.commentBox,
                value: ''
            },
            post: {
                ... this.state.post,
                comments: updatedComments
            }
        })
    }

    __handleDeleteComment = (event, currentComment) => {
        let commentIndex = this.props.post.comments.findIndex(comment => comment.id === currentComment.id);
        if (commentIndex === -1) {
            return;
        }
        // this.props.post.comments = [
        //     ...this.props.post.comments.slice(0, commentIndex),
        //     ...this.props.post.comments.slice(commentIndex + 1),
        // ]
        this.setState({
            post: {
                ... this.state.post,
                comments: [
                    ...this.state.post.comments.slice(0, commentIndex),
                    ...this.state.post.comments.slice(commentIndex + 1),
                ]
            }
        })
    }

    getEnhancedUser(user)  {
        return {
            ... user,
            avatar: user.first_name.slice(0, 1) + user.last_name.slice(0, 1),
            full_name: user.first_name + ' ' + user.last_name
        };
    }

    mapComplementaryDataWithUserInfo(complementaryData, users) {
        return {
            ... complementaryData,
            user: this.getEnhancedUser(users.find(user => user.user_internal_id === complementaryData.user_internal_id))
        }
    }

    __getReactionString(reactions, current_user_id) {
        let len = reactions.length;
        if (len < 0) {
            return null;
        }

        let currentUserInReactions = (reactions, current_user_id) => {
            let currentUserInReactions = reactions.find(reaction => reaction.user_internal_id === current_user_id)
            return currentUserInReactions !== undefined && currentUserInReactions !== null;
        }

        switch (len) {
            case 0: {
                return null;
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
                console.log(reactions, 'mizerie')
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
        let viewData = this.state;
        let cardMedia = null;
        let cardContent = null;
        let cardComments = [];
        let cardReactions = [];

        if (viewData.post.image) {
            cardMedia = <CardMedia
                className={"card-media"}
                image={viewData.post.image}
            />
        }
        if (viewData.post.text) {
            cardContent = <CardContent>
                <Typography variant="h6" color="textSecondary" component="p">
                    {viewData.post.text}
                </Typography>
            </CardContent>
        }

        cardComments = viewData.post.comments.map(comment => <SmComment handleDelete={this.__handleDeleteComment} comment={comment}></SmComment>)

        return (
            <div>
                <SmReactionDialog reactions={this.state.post.reactions}
                    open={this.state.reactionDialogOpen} onClose={this.__handleReactionDialogClose}></SmReactionDialog>
                <Card className={"card-root"}>
                    <div className={"sm-post-panel"}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={"card-avatar"}>
                                    {viewData.post.avatar}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon onClick={this.__handleOpenPostMenu}/>
                                </IconButton>
                            }
                            title={viewData.post.userName}
                            subheader={viewData.post.date}
                            titleTypographyProps={{variant: "h5"}}
                            subheaderTypographyProps={{variant: "h6"}}
                        />
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
                                <IconButton onClick={this.__handleReaction} aria-label="add to favorites">
                                    {this.state.reactionButton.type}
                                </IconButton>
                                <Button onClick={this.__handleViewReactions}
                                    color="primary" startIcon={<FaceIcon />}>{this.state.reactionButton.label}</Button>
                            </CardActions>
                            <CardContent>
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
                                    />
                                    <Button onClick={this.__handleAddComment}
                                        color="primary" startIcon={<ChatBubble />}>{"Comment"}</Button>
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
