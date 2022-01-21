import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import './SmUserActivityDialog.css';

class SmUserActivityDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.__handleClose.bind(this);
        this.__handleListItemClick.bind(this);
    }

    __handleClose = (selectedValue) => {
        this.props.onClose(selectedValue);
    };

    __handleListItemClick = (value) => {
        this.props.onClose(value);
    };

    getItemFor(avatar, user, did, action, withMore, description) {
        return <ListItem button>
            <ListItemAvatar>
                <Avatar aria-label="recipe" className={"card-avatar"}>
                    {avatar}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user + ' ' + did} secondary={
                <div>
                    <Typography variant="subtitle2">"{action}"</Typography>
                    <Typography variant={'body1'}>{withMore + ' ' + description}</Typography>
                </div>
            }/>
        </ListItem>
    }

    processActivityItems = (activityItems) => {
        let things = [];
        let currentUser = this.props.currentUser;
        activityItems.posts.map((post) => {
            things.push({
                div: this.getItemFor('P', currentUser.full_name, 'posted', post.post_text, 'on', post.timestamp),
                timestamp: post.timestamp
            })
        });

        activityItems.comments.map((comment) => {
            things.push({
                div: this.getItemFor('C', currentUser.full_name, 'commented', comment.comment_text, 'on', comment.timestamp),
                timestamp: comment.timestamp
            })
        });

        activityItems.reactions.map((reaction) => {
            things.push({
                div: this.getItemFor('R', currentUser.full_name, 'reacted ' + reaction.reaction, reaction.post_text, 'on', reaction.timestamp),
                timestamp: reaction.timestamp
            })
        });

        activityItems.answers.map((answer) => {
            things.push({
                div: this.getItemFor('A', currentUser.full_name, 'answered', answer.question_text, 'on', answer.timestamp),
                timestamp: answer.timestamp
            })
        });
        return things
            .sort((thingOne, thingTwo) => {
                var d1 = new Date(thingOne.timestamp);
                var d2 = new Date(thingTwo.timestamp);
                if (d1 > d2) {
                    return -1;
                } else if (d1 < d2) {
                    return 1;
                }
                return 0;
            })
            .map((thing) => thing.div);
    }

    render() {
        return (
            <div className={"sm-user-activity-dialog"}>
                <Dialog onClose={this.__handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
                    <DialogTitle>User Activity</DialogTitle>
                    <List>
                        {
                            this.processActivityItems(this.props.activityItems)
                        }
                        {/*{this.props.activityItems.map((activityItem) => (*/}
                        {/*    <ListItem button>*/}
                        {/*        <ListItemAvatar>*/}
                        {/*            <Avatar aria-label="recipe" className={"card-avatar"}>*/}
                        {/*                {"activityItem.user.avatar"}*/}
                        {/*            </Avatar>*/}
                        {/*        </ListItemAvatar>*/}
                        {/*        <ListItemText primary={"activityItem.user.full_name"} secondary={"activityItem.timestamp"}/>*/}
                        {/*    </ListItem>*/}
                        {/*))}*/}
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default SmUserActivityDialog;
