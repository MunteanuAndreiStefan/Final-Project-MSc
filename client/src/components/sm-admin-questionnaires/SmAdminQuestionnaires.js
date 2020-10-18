import React, {Component} from 'react';
import './SmAdminQuestionnaires.css';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import SmAlert from "../sm-alert/SmAlert";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import * as CommunicationService from "../../services/CommunicationService";
import Chip from "@material-ui/core/Chip";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SmAdminQuestion from "../sm-admin-questions/SmAdminQuestion";

class SmAdminQuestionnaires extends Component {
    constructor(props) {
        super(props);

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
            priority: null,
            title: '',
            description: '',
            questionList: [],
            questionTypes: ['TEXT', 'SCALE', 'IMAGE'],
            tags: [],
            tagPriorityOrder: []
        };
    }

    async componentDidMount() {
        CommunicationService.getTags()
            .then((res) => {
                this.setState({
                    tags: res.tags.map((category) => {
                        return {
                            ...category,
                            chipVariant: 'outlined'
                        }
                    })
                });
            })
            .catch(console.error);
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

    handlePriorityChange = (event) => {
        this.setState({
            priority: event.target.value
        });
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    handleAddFreshQuestion = (event) => {
        let currentQuestions = this.state.questionList;
        currentQuestions.push({
            id: currentQuestions.length + 1,
            title: '',
            description: '',
            question_type: null,
            multiple_answers: null,
            tags: this.state.tags.map((category) => {
                return {
                    ...category,
                    chipVariant: 'outlined'
                }
            }),
            selectedTags: [],
            answers: [],
            selectedQuestionTypesValue: 0,
            selectedMultipleAnswersValue: 0
        });
        this.setState({
            questionList: currentQuestions
        })
    }

    handleQuestionTitleChange = (question, title) => {
        this.searchAndEditQuestion(question, 'title', title)
    }

    handleQuestionDescriptionChange = (question, description) => {
        this.searchAndEditQuestion(question, 'description', description)
    }

    handleQuestionTypeChange = (question, question_type) => {
        this.searchAndEditQuestion(question, 'question_type', question_type)
    }

    handleQuestionMultipleAnswersChange = (question, multiple_answers) => {
        this.searchAndEditQuestion(question, 'multiple_answers', multiple_answers)
    }

    handleQuestionSelectedTagsChange = (question, selectedTags) => {
        this.searchAndEditQuestion(question, 'selectedTags', selectedTags)
    }

    handleQuestionTagsChange = (question, tags) => {
        this.searchAndEditQuestion(question, 'tags', tags)
    }

    handleQuestionAnswersChange = (question, answers) => {
        this.searchAndEditQuestion(question, 'answers', answers)
    }

    searchAndEditQuestion = (question, objectName, newValue) => {
        let currentQuestions = this.state.questionList;
        let answerIndexToBeDeleted = currentQuestions.findIndex((q) => q.id == question.id)
        question[objectName] = newValue;
        currentQuestions = [
            ...currentQuestions.slice(0, answerIndexToBeDeleted),
            {
                ...question
            },
            ...currentQuestions.slice(answerIndexToBeDeleted + 1),
        ]

        this.setState({
            questionList: currentQuestions
        })
    };

    handleDeleteQuestion = (question) => {
        let currentQuestions = this.state.questionList;
        let questionIndexToBeDeleted = currentQuestions.findIndex((q) => q.id == question.id)

        currentQuestions = [
            ...currentQuestions.slice(0, questionIndexToBeDeleted),
            ...currentQuestions.slice(questionIndexToBeDeleted + 1),
        ]

        this.setState({
            questionList: currentQuestions
        })
    }

    getQuestion = (question) => {
        return <SmAdminQuestion question={question}
                                tags={this.state.tags}
                                handleDeleteQuestion={this.handleDeleteQuestion}
                                handleQuestionTitleChange={this.handleQuestionTitleChange}
                                handleQuestionDescriptionChange={this.handleQuestionDescriptionChange}
                                handleQuestionTagsChange={this.handleQuestionTagsChange}
                                handleQuestionTypeChange={this.handleQuestionTypeChange}
                                handleQuestionMultipleAnswersChange={this.handleQuestionMultipleAnswersChange}
                                handleQuestionSelectedTagsChange={this.handleQuestionSelectedTagsChange}
                                handleQuestionAnswersChange={this.handleQuestionAnswersChange}
        ></SmAdminQuestion>
    }

    handleChipClick = (inputTag) => {
        let categoryIndex = this.state.tags.findIndex(tag => tag.id == inputTag.id);
        let tagPriorityOrder = this.state.tagPriorityOrder;
        let currentTag = this.state.tags[categoryIndex];
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
            ...this.state.tags.slice(0, categoryIndex),
            {
                ...currentTag,
                chipVariant: currentTag.chipVariant === 'default' ? 'outlined' : 'default'
            },
            ...this.state.tags.slice(categoryIndex + 1),
        ]

        this.setState({
            tags: nextTags,
            tagPriorityOrder: tagPriorityOrder
        })
    }

    getChipFromTag = (tag, size = "medium") => {
        return <Chip
            size={size}
            key={"chip-" + tag.id}
            icon={<LocalOfferIcon/>}
            label={tag.name}
            clickable
            color="primary"
            onClick={() => this.handleChipClick(tag)}
            variant={tag.chipVariant}
        />
    }

    mapTagsForSend = (tags) => {
        return tags.map((tag, index) => {
            return {
                id: tag,
                interest: index + 1
            }
        })
    }

    prepareQuestionForSend = (question) => {
        return {
            title: question.title,
            description: question.description,
            type: question.question_type,
            multiple_answers: question.multiple_answers == 'yes',
            tags: this.mapTagsForSend(question.selectedTags),
            answers: question.answers.map(answer => {
                return {
                    text: question.question_type === 'TEXT' ? answer.text : null,
                    scale_value: question.question_type === 'SCALE' ? parseInt(answer.scale_value) : null,
                    image_url: question.question_type === 'IMAGE' ? answer.image_url : null,
                }
            })
        }
    }

    questionnaireCreateOnClick = () => {
        let toBeSentObject = {
            priority: parseInt(this.state.priority),
            title: this.state.title,
            description: this.state.description,
            tags: this.mapTagsForSend(this.state.tagPriorityOrder),
            questions: this.state.questionList.map(this.prepareQuestionForSend)
        }
        this.verifyBodyAndSend(toBeSentObject);
        console.log('questionnaireCreateOnClick', toBeSentObject)
    }

    tagsAreValid = (tags) => {
        return tags.length > 0 && tags.length === tags.filter(tag => tag.id && tag.interest).length
    }

    answersAreValid = (answers) => {
        return answers.length > 1 && answers.length ===
            answers.filter(tag => (tag.text && tag.text.length > 0)
                || ( tag.scale_value)
                || (tag.image_url && tag.image_url.length > 0)).length
    }

    verifyBodyAndSend = (body) => {
        debugger
        if (!body.priority || !body.title || !body.description || !body.tags || !body.questions
            || !(body.title.length > 0) || !(body.description.length > 0) || !(body.tags.length > 0) || !(body.questions.length > 0)) {
            return this.handleAlertShow("Please fill in all the general details...", this.state.alert.types.ERROR);
        }

        if (!this.tagsAreValid(body.tags)) {
            return this.handleAlertShow("Please fill in all the tags details...", this.state.alert.types.ERROR);
        }

        let validQuestions = body.questions.filter(q => q.title && q.description && q.type && q.multiple_answers
            && q.description && (q.title.length > 0) && (q.description.length > 0) && (q.type.length > 0)
            && (q.description.length > 0) && this.tagsAreValid(q.tags) && this.answersAreValid(q.answers));

        if (validQuestions.length < 1 || validQuestions.length !== body.questions.length) {
            return this.handleAlertShow("Please fill in all the questions details...", this.state.alert.types.ERROR);
        }

        CommunicationService.createQuestionnaire(body)
            .then((res) => {
                debugger
                console.log('createQuestionnaire', res)
                this.handleAlertShow("Success", this.state.alert.types.SUCCESS);
                //this.clearObject()
            })
            .catch((err) => {
                this.handleAlertShow("Error while calling the API.", this.state.alert.types.ERROR);
                console.error(err);
            });
    }

    clearObject = () => {
        this.setState({
            priority: null,
            title: '',
            description: '',
            questionList: [],
            tags: this.state.tags.map((tag) => {
                return {
                    ...tag,
                    chipVariant: 'outlined'
                }
            }),
            tagPriorityOrder: []
        });
    }

    render() {
        let questionList = this.state.questionList.map(question => this.getQuestion(question));
        return (
            <div className={"sm-admin-posts"}>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>
                <Card variant="outlined">
                    <CardContent className={"sm-admin-questionnaires-panel"}>
                        <div className={"sm-admin-questionnaires-top-panel"}>
                            <div className={"sm-admin-q-row"}>
                                <TextField
                                    className={"w30percent"}
                                    id="outlined-multiline-static"
                                    label="Title"
                                    variant="outlined"
                                    value={this.state.title}
                                    onChange={this.handleTitleChange}
                                />
                                <TextField
                                    className={"w60percent"}
                                    id="outlined-multiline-static"
                                    label="Description"
                                    variant="outlined"
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange}
                                />
                                <TextField
                                    className={"w10percent"}
                                    label="Priority"
                                    type="number"
                                    variant="outlined"
                                    value={this.state.priority}
                                    onChange={this.handlePriorityChange}
                                />
                            </div>
                        </div>
                        <div className={"sm-admin-questionnaires-bottom-panel"}>
                            <div className={"sm-questions"}>
                                {questionList}
                            </div>

                            <div className={"sm-admin-q-row"}>
                                <div className={"w10percent"}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={this.handleAddFreshQuestion}
                                        startIcon={<AddCircleOutlineIcon/>}
                                    >
                                        Add Question
                                    </Button>
                                </div>
                                <div className={"w80percent"}>
                                    {
                                        this.state.tags.map((tag) => this.getChipFromTag(tag))
                                    }
                                </div>
                            </div>

                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="large"
                                onClick={this.questionnaireCreateOnClick}
                        >Create Questionnaire</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmAdminQuestionnaires;
