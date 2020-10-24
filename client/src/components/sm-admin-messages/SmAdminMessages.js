import React, {Component} from 'react';
import './SmAdminMessages.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import * as CommunicationService from '../../services/CommunicationService';
import SmAlert from "../sm-alert/SmAlert";

class SmAdminMessages extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    updateAlertText = (event) => {
        this.setState({
            alertText: event.target.value
        });
    }

    buttonClick = () => {
        CommunicationService.sendAlert(this.state.alertText)
            .then(() => {
                this.setState({
                    alertText: ''
                });
                this.handleAlertShow("Alert successfully sent", this.state.alert.types.SUCCESS);
            })
            .catch(err => {
                this.handleAlertShow("Error sending the alert", this.state.alert.types.ERROR);
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
            <Box>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>
                <TextField id="standard-basic" label="Standard" onChange={this.updateAlertText}
                           value={this.state.alertText}/>
                <Button variant="contained" color="secondary" onClick={this.buttonClick}>
                    Send alert
                </Button>
            </Box>
        )
    }
}

export default SmAdminMessages;
