import React, {Component} from 'react';
import './SmComment.css';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Button} from "@material-ui/core";

class SmComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            postUserId: this.props.postUserId,
            comment: this.props.comment,
            anchorElement: null
        };

        this.__handleOpenCommentMenu.bind(this);
        this.__handleCloseCommentMenu.bind(this);
        this.__handleCommentDelete.bind(this);
        this.setAnchorElement.bind(this);
    }


    __handleOpenCommentMenu = (event) => {
        this.setAnchorElement(event.currentTarget);
    }

    __handleCloseCommentMenu = (event) => {
        this.setAnchorElement(null);
    }

    __handleCommentDelete = (event) => {
        this.__handleCloseCommentMenu(event);
        this.props.handleDelete(event, this.state.comment);
    }

    setAnchorElement(element) {
        this.setState({
            anchorElement: element
        })
    }

    render() {

        let currentUserId = this.state.currentUser.user_internal_id;
        let commentOptionButton = currentUserId === this.state.comment.user_internal_id || currentUserId == this.state.postUserId
            ? <IconButton aria-label="settings">
                <MoreVertIcon onClick={this.__handleOpenCommentMenu}/>
            </IconButton> : null;
        let computedSubHeaderText = this.props.comment.visible === true ? this.props.comment.text : '(Pending...) ' + this.props.comment.text;
        return (
            <div>
                <Card className={"comment-root"}>
                    <CardHeader
                        avatar={
                            <Button
                                onClick={this.props.handleViewUserContactInfo(this.props.comment.user.user_internal_id)}
                                className={"sm-comment-post-contact-info-button"}>
                                <Avatar aria-label="recipe" className={"card-avatar"}>
                                    {this.props.comment.user.avatar}
                                </Avatar>
                            </Button>
                        }
                        action={commentOptionButton}
                        title={this.props.comment.user.full_name}
                        subheader={computedSubHeaderText}
                        titleTypographyProps={{variant: "h6"}}
                        subheaderTypographyProps={{variant: "subtitle1"}}
                    />
                    <Menu
                        id="comment-menu"
                        anchorEl={this.state.anchorElement}
                        keepMounted
                        open={Boolean(this.state.anchorElement)}
                        onClose={this.__handleCloseCommentMenu}>
                        <MenuItem onClick={this.__handleCommentDelete}>Delete</MenuItem>
                    </Menu>
                </Card>
            </div>
        );
    }
}

export default SmComment;
