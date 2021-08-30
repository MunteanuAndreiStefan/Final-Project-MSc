import React, {Component} from 'react';
import './SmQuestionnaire.css';
import SmQuestion from "../sm-question/SmQuestion";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FaceIcon from "@material-ui/icons/Face";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import {ChatBubble} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import * as CommunicationService from "../../services/CommunicationService";
import SmAlert from "../sm-alert/SmAlert";

class SmQuestionnaire extends Component {
    constructor(props) {
        super(props);

        let questionToAnswerMap = {}
        props.questionnaire.questions.forEach(question => {
           questionToAnswerMap[question.id] = [];
        });

        this.state = {
            alert: {
                types: {
                    SUCCESS: 'success',
                    ERROR: 'error',
                },
                open: false,
                severity: '',
                message: ''
            },
            questionnaire: props.questionnaire,
            questionToAnswerMap: questionToAnswerMap,
            anchorElement: null
        };
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

    __handleQuestionnaireReport = (event) => {
        let values = Object.values(this.state.questionToAnswerMap);
        if(values.filter(x => x.length === 0).length > 0) {
            alert('Complete the quiz.')
        } else {
            CommunicationService.answer(this.state.questionnaire.id, this.state.questionToAnswerMap)
                .then((res) => {
                    if (res.statusCode == 200) {
                        return this.handleAlertShow(JSON.stringify(res.body), this.state.alert.types.SUCCESS);
                    }
                    return this.handleAlertShow(JSON.stringify(res.body), this.state.alert.types.ERROR);
                })
                .catch(console.error)
        }
    }

    __changeAnswersOf = (id, answerIds) => {
        this.state.questionToAnswerMap[id] = answerIds;
    }

    __handleOpenOptionsMenu = (event) => {
        this.setAnchorElement(event.currentTarget);
    }

    __handleCloseOptionsMenu = (event) => {
        this.setAnchorElement(null);
    }

    setAnchorElement(element) {
        this.setState({
            anchorElement: element
        })
    }

    __handleOptionDelete = (event) => {
        this.__handleCloseOptionsMenu(event);
        let questionnaireId = this.state.questionnaire.id;
        CommunicationService.deleteQuestionnaire(questionnaireId)
            .then((res) => {
                if (res.statusCode === 200) {
                    this.props.handleDelete(questionnaireId);
                }
            })
            .catch(console.error)
    }

    render() {
        let questionList = this.props.questionnaire.questions.map((question, index) =>
            <SmQuestion changeAnswers={this.__changeAnswersOf}
                key={index} question={question}></SmQuestion>);

        let questionnaire = this.props.questionnaire;
        let questionnaireOptionButton = this.props.isAdmin
            ? <IconButton aria-label="settings">
                <MoreVertIcon onClick={this.__handleOpenOptionsMenu}/>
            </IconButton> : null;
        return (
            <div>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>

                <Card>
                    <CardHeader
                        action={questionnaireOptionButton}
                        title={questionnaire.title}
                        titleTypographyProps={{variant: "h2"}}
                    />
                    <Menu
                        id="comment-menu"
                        anchorEl={this.state.anchorElement}
                        keepMounted
                        open={Boolean(this.state.anchorElement)}
                        onClose={this.__handleCloseOptionsMenu}>
                        <MenuItem onClick={this.__handleOptionDelete}>Delete</MenuItem>
                    </Menu>
                    <CardContent>
                        <Typography variant="h5">
                            {questionnaire.description}
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            Taking this questionnaire will likely take up to 10 minutes so please be patient and try to answer as acurate as possible.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        {questionList}
                    </CardContent>
                    <CardActions className={"sm-questionnaire-actions"}>
                        <Button variant="contained" color="primary"
                                onClick={this.__handleQuestionnaireReport}>
                            Finish Questionnaire
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmQuestionnaire;
