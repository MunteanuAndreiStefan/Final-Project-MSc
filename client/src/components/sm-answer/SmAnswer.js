import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

import './SmAnswer.css';
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

class SmAnswer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: props.answer,
            questionType: props.type,
            multiple: props.multiple || false,
            checked: false
        };
    }

    __getSelectorType() {
        let checked = this.props.selectedAnswerIds.find(x => x == this.state.answer.id) !== undefined
        if (this.state.multiple) {
            return <Checkbox
                checked={this.props.checked}
                onChange={this.props.handleValueChange}
                value={this.state.answer.id}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        }
        return <Radio
            checked={checked}
            onChange={this.props.handleValueChange}
            value={this.state.answer.id}
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'A' }}
        />
    }

    __getAnswerDiv() {
        switch (this.state.questionType) {
            case 'SCALE': {
                return <div className={"sm-answer-scale-container"}>
                    {this.__getSelectorType()}
                    {this.state.answer.scale_value}
                </div>
            }
            case 'TEXT': {
                return <div className={"sm-answer-text-container"}>
                    {this.__getSelectorType()}
                    {this.state.answer.text}
                </div>
            }
            case 'IMAGE': {
                return <div className={"sm-answer-image-container"}>
                    {this.__getSelectorType()}
                    <CardMedia
                        className="sm-answer-image"
                        onChange={this.props.handleValueChange}
                        image={this.state.answer.image_url}
                        src={this.state.answer.image_url}
                    />
                </div>
            }
            default: {
                return `Question type ${this.state.questionType} does not exist.`
            }
        }
    }

    render() {

        return (
            <div>
                {this.__getAnswerDiv()}
            </div>
        );
    }
}

export default SmAnswer;
