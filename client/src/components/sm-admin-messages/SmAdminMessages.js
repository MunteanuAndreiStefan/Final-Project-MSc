import React, {Component} from 'react';
import './SmAdminMessages.css';
import '../sm-questionnaires/SmQuestionnaires.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import * as CommunicationService from '../../services/CommunicationService';
import SmAlert from "../sm-alert/SmAlert";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import {BrowserRouter as Router} from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import SmQuestionnaire from "../sm-questionnaire/SmQuestionnaire";
import SmMessagesComponent from "../sm-messages-component/SmMessagesComponent";



class SmAdminMessages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
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
            selectedQuestionnaireIndex: -1,
            accordionControlExpand: false,
            searchBox: {
                label: 'Search',
                value: ''
            }
        };
    }

    __handleQuestionnaireOnClick = (event, index) => {
        this.setState({
            selectedQuestionnaireIndex: index
        })
    }

    __handleAccordionChange = (panel) => (event, isExpanded) => {
        this.setState({
            accordionControlExpand: isExpanded ? panel : false
        })
    };

    _handleSearchFieldChange = (event) => {
        let searchElement = event.target.value;
        let searchBox = this.state.searchBox;
        searchBox.value = searchElement;

        this.setState({
            searchBox: searchBox
        })
    }

    async componentDidMount() {
        CommunicationService.getMessages()
            .then((messages) => {
                let usersWithMessages = {};
                let users = [];
                messages.forEach(m => {
                    let dominantId = m.receiver > 0 ? m.receiver : m.sender;
                    if (usersWithMessages[dominantId] === undefined) {
                        let fullName = m.first_name + ' ' + m.last_name;
                        usersWithMessages[dominantId] = {
                            name: fullName,
                            email: m.email,
                            messages: []
                        }
                        users.push({
                            id: dominantId,
                            email: fullName + ' (' + m.email + ')'
                        })
                    }
                    usersWithMessages[dominantId].messages.push(m);
                })
                this.setState({
                    users: users,
                    usersWithMessages: usersWithMessages,
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
        let searchElement = this.state.searchBox.value.toLowerCase();
        let userList = this.state.users
            .filter((user) => user.email.toLowerCase().includes(searchElement))
            .map((user, index) => {
                let panelName = 'panel' + user.id;
                return <Accordion questionnaire={user} expanded={this.state.accordionControlExpand === panelName}
                                  onChange={this.__handleAccordionChange(panelName)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <Typography variant="h5">{user.name}</Typography>
                        <Typography variant="h6">{user.email}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={"sm-row"}>
                        <div className={"sm-left-align"}>

                        </div>
                        <div className={"sm-right-align"}>
                            <Button onClick={(e) => this.__handleQuestionnaireOnClick(e, index)}
                                    variant="contained" color="primary">Chat</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>;
            });

        let selectedIndex = this.state.selectedQuestionnaireIndex;

        let currentQuestionnaireComponent = selectedIndex < 0 ? null :
            <SmMessagesComponent key={selectedIndex} messages={this.state.usersWithMessages[this.state.users[selectedIndex].id].messages}
                                 userInternalId={this.state.users[selectedIndex].id}></SmMessagesComponent>

        return (
            <Box>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>
                <div className={"sm-questionnaires"}>
                    <Router>
                        <div className={"sm-questionnaires-panel"}>
                            <div className={"sm-questionnaires-left-panel"}>
                                <div className={"sm-line"}>
                                    <div id={"search-field"}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <SearchIcon />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    label={this.state.searchBox.label}
                                                    value={this.state.searchBox.value}
                                                    onChange={this._handleSearchFieldChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>

                                {userList}
                            </div>
                            <div className={"sm-questionnaires-right-panel"}>
                                {currentQuestionnaireComponent}
                            </div>
                        </div>
                    </Router>
                </div>
            </Box>
        )
    }
}

export default SmAdminMessages;
