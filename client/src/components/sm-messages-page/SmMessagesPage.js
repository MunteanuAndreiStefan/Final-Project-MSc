import React, {Component} from 'react';
import './SmMessagesPage.css';
import * as CommunicationService from '../../services/CommunicationService';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import SmAlert from "../sm-alert/SmAlert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';

class SmMessagesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            alertText: '',
            alert: {
                types: {
                    SUCCESS: 'success',
                    ERROR: 'error',
                },
                open: false,
                severity: '',
                message: ''
            },
        };
    }

    async componentDidMount() {
        CommunicationService.getMessages()
            .then((messages) => {
                this.setState({
                    messages: messages
                })
            })
            .catch(console.error)
    }

    updateAlertText = (event) => {
        this.setState({
            alertText: event.target.value
        });
    }

    buttonClick = () => {
        CommunicationService.sendAdminMessage(this.state.alertText)
            .then(() => {
                let messages = this.state.messages;
                messages.push({
                    info: '',
                    receiver: -2,
                    message: this.state.alertText,
                    timestamp: 'Just now ...',
                })
                this.setState({
                    messages: messages
                })
                this.setState({
                    alertText: ''
                });
                this.handleAlertShow("Message successfully sent", this.state.alert.types.SUCCESS);
            })
            .catch(err => {
                this.handleAlertShow("Error sending the message", this.state.alert.types.ERROR);
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

    getListItemFromMessage(message) {
        let left = null;
        let right = null;
        let info = <ListItemAvatar>
            <Avatar alt={message.info}/>
        </ListItemAvatar>;
        if (message.receiver < 0) {
            right = info;
        } else {
            left = info;
        }
        return <ListItem>
            {left}
            <ListItemText
                primary={message.message}
                secondary={message.timestamp}
            />
            {right}
        </ListItem>
    }

    render() {
        return (
            <Box>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>

                <div className={'scrollableList'}>
                    <List className={'root'}>
                        {this.state.messages.map(message => this.getListItemFromMessage(message))}
                    </List>
                </div>

                <div className={'interactionable'}>
                    <TextField id="standard-basic" label="Your message ..." onChange={this.updateAlertText}
                               value={this.state.alertText}/>
                    <IconButton onClick={this.buttonClick}>
                        <SendIcon fontSize="large" />
                    </IconButton>
                </div>
            </Box>
        )
    }
}

export default SmMessagesPage;
