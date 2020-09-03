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

class SmQuestionnaires extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionnaires: props.questionnaires,
            selectedQuestionnaireIndex: -1,
            accordionControlExpand: false
        };
    }

    __handleQuestionnaireOnClick = (event, index) => {
        console.log('__handleQuestionnaireOnClick', event, index)
        this.setState({
            selectedQuestionnaireIndex: index
        })
        console.log('__handleQuestionnaireOnClick', this.state.selectedQuestionnaireIndex)

    }

    __handleAccordionChange = (panel) => (event, isExpanded) => {
        this.setState({
            accordionControlExpand: isExpanded ? panel : false
        })
    };

    render() {

        let questionnaireList = this.state.questionnaires.map((questionnaire, index) => {
            let panelName = 'panel' + questionnaire.id;
            return <Accordion expanded={this.state.accordionControlExpand === panelName} onChange={this.__handleAccordionChange(panelName)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
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
            </Accordion>
        });

        let selectedIndex = this.state.selectedQuestionnaireIndex;
        let currentQuestionnaireComponent = selectedIndex < 0 ? null :
            <SmQuestionnaire key={selectedIndex} questionnaire={this.state.questionnaires[selectedIndex]}></SmQuestionnaire>;

        return (
            <div className={"sm-questionnaires"}>
                <Router>
                    <div className={"sm-questionnaires-panel"}>
                        <div className={"sm-questionnaires-left-panel"}>
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
