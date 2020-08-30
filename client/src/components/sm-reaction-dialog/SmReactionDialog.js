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

import './SmReactionDialog.css';

class SmReactionDialog extends Component {
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

    render() {

        return (
            <div className={"sm-reaction-dialog"}>
                <Dialog onClose={this.__handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
                    <DialogTitle>Reactions</DialogTitle>
                    <List>
                        {this.props.reactions.map((reaction) => (
                            <ListItem button key={reaction.id}>
                                <ListItemAvatar>
                                    <Avatar aria-label="recipe" className={"card-avatar"}>
                                        {reaction.user.avatar}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={reaction.user.full_name} secondary={reaction.timestamp}/>
                            </ListItem>
                        ))}
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default SmReactionDialog;
