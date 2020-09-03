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

class SmQuestionnaire extends Component {
    constructor(props) {
        super(props);

        let questionToAnswerMap = {}
        props.questionnaire.questions.forEach(question => {
           questionToAnswerMap[question.id] = [];
        });

        this.state = {
            questionnaire: props.questionnaire,
            questionToAnswerMap: questionToAnswerMap
        };
    }

    __handleQuestionnaireReport = (event) => {
        let values = Object.values(this.state.questionToAnswerMap);
        console.log(values);
        if(values.filter(x => x.length === 0).length > 0) {
            alert('Complete the quiz.')
        } else {
            alert(JSON.stringify(this.state.questionToAnswerMap));
        }
    }

    __changeAnswersOf = (id, answerIds) => {
        this.state.questionToAnswerMap[id] = answerIds;
    }

    render() {
        let questionList = this.state.questionnaire.questions.map((question, index) =>
            <SmQuestion changeAnswers={this.__changeAnswersOf}
                key={index} question={question}></SmQuestion>);

        let questionnaire = this.state.questionnaire;
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h2" gutterBottom>
                            {questionnaire.title}
                        </Typography>
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
