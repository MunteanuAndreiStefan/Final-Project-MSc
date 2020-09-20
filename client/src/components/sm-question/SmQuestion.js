import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './SmQuestion.css';
import SmAnswer from "../sm-answer/SmAnswer";
import {Button} from "react-bootstrap";

class SmQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: props.question,
            expanded: false,
            selectedAnswerIds: []
        };
    }

    __handleValueChange = (event) => {
        let multiple = this.state.question.multiple_answers;
        let targetValue = Number(event.target.value);
        let selectedIds = multiple ? this.state.selectedAnswerIds : [];
        if (selectedIds.indexOf(targetValue) !== -1) {
            selectedIds = selectedIds.filter((id) => id !== targetValue);
        } else {
            selectedIds.push(targetValue)
        }
        this.setState({
            selectedAnswerIds: selectedIds
        })
        this.props.changeAnswers(this.state.question.id, selectedIds);
    };

    __handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    };

    render() {
        let question = this.props.question;
        let answerList = this.state.question.possibleAnswers.map((answer, index) => {
            console.log(answer, question);
            return <SmAnswer answer={answer} type={question.question_type} key={index}
                      selectedAnswerIds={this.state.selectedAnswerIds}
                      handleValueChange={this.__handleValueChange}
                      multiple={question.multiple_answers}
            ></SmAnswer>
        });


        let answersContainerClass = question.type === 'TEXT' ? "sm-question-answers-container-column" : "sm-question-answers-container-row"

        return (
            <div className={"sm-question"}>
                <Card variant={"outlined"}>
                    <CardHeader
                        onClick={this.__handleExpandClick}
                        title={this.state.question.title}
                        action={
                            <IconButton
                                onClick={this.__handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        }
                    />
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div className={answersContainerClass}>
                                {answerList}
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default SmQuestion;
