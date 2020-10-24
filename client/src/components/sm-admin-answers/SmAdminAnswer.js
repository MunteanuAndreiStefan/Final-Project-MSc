import React, {Component} from 'react';
import './SmAdminAnswer.css';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from '@material-ui/icons/Clear';
import Input from '@material-ui/core/Input';


class SmAdminAnswer extends Component {
    constructor(props) {
        super(props);
    }

    getTextAnswer = (answer) => {
        return <TextField
            className={""}
            id="outlined-multiline-static"
            label="Text"
            variant="outlined"
            value={this.props.answer.text}
            onChange={(event) => this.props.handleTextChange(answer, event)}
        />
    }

    getScaleAnswer = (answer) => {
        return <TextField
            className={""}
            id="outlined-multiline-static"
            label="Scale value"
            variant="outlined"
            type="number"
            value={this.props.answer.scale_value}
            onChange={(event) => this.props.handleScaleChange(answer, event)}
        />
    }

    getImageAnswer = (answer) => {
        let someId = "contained-button-file-" + answer.id
        return <div className={"sm-admin-posts-panel-row right-panel-html upload-file-panel"}>
            <input
                accept="image/*"
                style={{display: "none"}}
                id={someId}
                type="file"
                onChange={(event) => this.props.handleFileChange(answer, event)}
            />
            <label htmlFor={someId}>
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<CloudUploadIcon/>}
                >
                    Choose a image ...
                </Button>
            </label>
            <div className={"upload-file-panel"}>
                <Typography variant="h6" gutterBottom>
                    {this.props.answer.image_url.name}
                </Typography>
            </div>
        </div>;
    }

    getAnswerContent = (answer) => {
        let content = null;
        switch (this.props.questionType) {
            case "TEXT": {
                content = this.getTextAnswer(answer);
                break;
            }
            case "SCALE": {
                content = this.getScaleAnswer(answer);
                break;
            }
            case "IMAGE": {
                content = this.getImageAnswer(answer);
                break;
            }
        }

        return content;
    }

    render() {
        return (
            <div className={""}>
                <Card className={""}>
                    <CardContent className={"content-flex"}>
                        <IconButton aria-label="delete"
                                    onClick={() => this.props.handleDeleteAnswer(this.props.answer)}>
                            <DeleteIcon fontSize="large"/>
                        </IconButton>
                        {this.getAnswerContent(this.props.answer)}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default SmAdminAnswer;
