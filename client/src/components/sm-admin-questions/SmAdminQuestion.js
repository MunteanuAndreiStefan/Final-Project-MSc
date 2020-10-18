import React, {Component} from 'react';
import './SmAdminQuestion.css';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SmAdminAnswer from "../sm-admin-answers/SmAdminAnswer";

class SmAdminQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionTypes: ['TEXT', 'SCALE', 'IMAGE'],
        };
    }

    handleTitleChange = (event) => {
        this.props.handleQuestionTitleChange(this.props.question, event.target.value);
    }

    handleDescriptionChange = (event) => {
        this.props.handleQuestionDescriptionChange(this.props.question, event.target.value);
    }

    handleTypeSelectionChange = (event) => {
        this.props.handleQuestionTypeChange(this.props.question, event.target.value);
    }

    handleMultipleAnswerSelectionChange = (event) => {
        this.props.handleQuestionMultipleAnswersChange(this.props.question, event.target.value);
    }

    handleChipClick = (inputTag) => {
        let categoryIndex = this.props.question.tags.findIndex(tag => tag.id == inputTag.id);
        let tagPriorityOrder = this.props.question.selectedTags;
        let currentTag = this.props.question.tags[categoryIndex];
        let tagIsSelected = currentTag.chipVariant !== 'default'

        if (!tagIsSelected) {
            let tagPriorityIndex = tagPriorityOrder.indexOf(inputTag.id)
            if (tagPriorityIndex > -1) {
                tagPriorityOrder.splice(tagPriorityIndex, 1);
            }
        } else {
            tagPriorityOrder.push(inputTag.id);
        }

        let nextTags = [
            ...this.props.question.tags.slice(0, categoryIndex),
            {
                ...currentTag,
                chipVariant: currentTag.chipVariant === 'default' ? 'outlined' : 'default'
            },
            ...this.props.question.tags.slice(categoryIndex + 1),
        ]

        this.props.handleQuestionTagsChange(this.props.question, nextTags)
        this.props.handleQuestionSelectedTagsChange(this.props.question, tagPriorityOrder)
    }

    getChipFromTag = (tag, size = "medium") => {
        return <Chip
            size={size}
            key={"chip-" + tag.id}
            icon={<LocalOfferIcon/>}
            label={tag.name}
            clickable
            color="secondary"
            onClick={() => this.handleChipClick(tag)}
            variant={tag.chipVariant}
        />
    }

    getAnswer = (answer) => {
        return <SmAdminAnswer answer={answer}
                              questionType={this.props.question.question_type}
                              handleDeleteAnswer={this.handleDeleteAnswer}
                              handleTextChange={this.handleTextChange}
                              handleScaleChange={this.handleScaleChange}
                              handleFileChange={this.handleFileChange}
        ></SmAdminAnswer>
    }

    handleAddFreshAnswer = () => {
        let answers = this.props.question.answers;
        answers.push({
            id: answers.length + 1,
            scale_value: null,
            text: null,
            image_url: {
                name: ''
            }
        });
        this.props.handleQuestionAnswersChange(this.props.question, answers)
    }

    handleTextChange = (answer, event) => {
        this.searchAndEditAnswer(answer, 'text', event.target.value)
    }

    handleScaleChange = (answer, event) => {
        this.searchAndEditAnswer(answer, 'scale_value', event.target.value)
    }

    handleFileChange = (answer, event) => {
        this.searchAndEditAnswer(answer, 'image_url', event.target.files[0])
    };

    searchAndEditAnswer = (answer, objectName, newValue) => {
        let currentAnswers = this.props.question.answers;
        let answerIndexToBeDeleted = currentAnswers.findIndex((a) => a.id == answer.id)
        answer[objectName] = newValue;
        currentAnswers = [
            ...currentAnswers.slice(0, answerIndexToBeDeleted),
            {
               ...answer
            },
            ...currentAnswers.slice(answerIndexToBeDeleted + 1),
        ]
        this.props.handleQuestionAnswersChange(this.props.question, currentAnswers)
    };

    handleDeleteAnswer = (answer) => {
        let currentAnswers = this.props.question.answers;
        let answerIndexToBeDeleted = currentAnswers.findIndex((a) => a.id == answer.id)
        currentAnswers = [
            ...currentAnswers.slice(0, answerIndexToBeDeleted),
            ...currentAnswers.slice(answerIndexToBeDeleted + 1),
        ]
        this.props.handleQuestionAnswersChange(this.props.question, currentAnswers)
    }

    render() {
        return (
            <div className={""}>
                <Card>
                    <CardContent className={"sm-admin-questionnaires-panel"}>
                        <div className={"sm-fresh-question"}>
                            <TextField
                                className={"w31percent"}
                                id="outlined-multiline-static"
                                label="Title"
                                value={this.props.question.title}
                                onChange={this.handleTitleChange}
                            />
                            <TextField
                                className={"w40percent"}
                                id="outlined-multiline-static"
                                label="Description"
                                value={this.props.question.description}
                                onChange={this.handleDescriptionChange}
                            />
                            <FormControl className={"w8percent"}>
                                <InputLabel id="demo-simple-select-label">Question types</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.props.question.question_type}
                                    disabled={this.props.question.answers.length > 0}
                                    onChange={this.handleTypeSelectionChange}
                                >
                                    {
                                        this.state.questionTypes.map((questionType) => {
                                            return <MenuItem value={questionType}>{questionType}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl className={"w8percent"}>
                                <InputLabel id="demo-simple-select-label">Multiple answers</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.props.question.multiple_answers}
                                    onChange={this.handleMultipleAnswerSelectionChange}
                                >
                                    <MenuItem value={"yes"}>Yes</MenuItem>
                                    <MenuItem value={"no"}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={"sm-fresh-question answers-list"}>
                            {
                                this.props.question.answers.map((answer) => this.getAnswer(answer))
                            }
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className={"sm-admin-q-row"}>
                            <div className={"w31percent"}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => this.handleAddFreshAnswer()}
                                    disabled={this.props.question.question_type == null}
                                    startIcon={<AddIcon/>}
                                >
                                    Add Answer
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => this.props.handleDeleteQuestion(this.props.question)}
                                    startIcon={<ClearIcon/>}
                                >
                                    Delete Question
                                </Button>
                            </div>
                            <div className={"w70percent"}>
                                {
                                    this.props.question.tags.map((tag) => this.getChipFromTag(tag, "small"))
                                }
                            </div>
                        </div>

                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmAdminQuestion;
