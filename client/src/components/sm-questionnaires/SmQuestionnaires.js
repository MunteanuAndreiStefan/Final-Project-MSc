import React, {Component} from 'react';
import './SmQuestionnaires.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SmQuestionnaire from "../sm-questionnaire/SmQuestionnaire";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import SmPost from "../sm-post/SmPost";

class SmQuestionnaires extends Component {
    constructor(props) {
        super(props);

        this.questionnaires = [];
        this.state = {
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

    render() {
        let searchElement = this.state.searchBox.value.toLowerCase();
        let questionnaireList = this.props.questionnaires
            .filter((questionnaire) => questionnaire.title.toLowerCase().includes(searchElement))
            .map((questionnaire, index) => {
                let panelName = 'panel' + questionnaire.id;
                return <Accordion questionnaire={questionnaire} expanded={this.state.accordionControlExpand === panelName}
                                  onChange={this.__handleAccordionChange(panelName)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <Typography variant="h5">{questionnaire.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={"sm-row"}>
                        <div className={"sm-left-align"}>
                            <Typography variant="body1">
                                {questionnaire.description}
                            </Typography>
                        </div>
                        <div className={"sm-right-align"}>
                            <Button onClick={(e) => this.__handleQuestionnaireOnClick(e, index)}
                                    variant="contained" color="primary">Take it</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>;
        });

        let selectedIndex = this.state.selectedQuestionnaireIndex;
        let currentQuestionnaireComponent = selectedIndex < 0 ? null :
            <SmQuestionnaire key={selectedIndex} isAdmin={this.props.isAdmin}
                             questionnaire={this.props.questionnaires[selectedIndex]}
                             handleDelete={this.props.handleQuestionnaireDelete}
            ></SmQuestionnaire>;
        let questionnaireStats = `${this.props.answeredQuestionnaireNumber} of ${this.props.questionnaires !== undefined ? this.props.questionnaires.length : 0} answered.`

        return (
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
                                <div className={"sm-questionnaire-statistics"}>
                                    {questionnaireStats}
                                </div>
                            </div>

                            {questionnaireList}
                        </div>
                        <div className={"sm-questionnaires-right-panel"}>
                            {currentQuestionnaireComponent}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default SmQuestionnaires;
