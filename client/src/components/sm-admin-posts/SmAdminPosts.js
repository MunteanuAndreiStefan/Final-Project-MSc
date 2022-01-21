import React, {Component} from 'react';
import './SmAdminPosts.css';
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import * as CommunicationService from "../../services/CommunicationService";
import {enhanceUser} from "../../services/UserService";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from "@material-ui/core/Paper";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SmAlert from "../sm-alert/SmAlert";

class SmAdminPosts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPostPriority: undefined,
            currentPostText: '',
            currentHTML: '',
            currentFile: {
                name: ''
            },
            selectedCategoryId: undefined,
            tagPriorityOrder: [],
            tags: [],
            categories: [],
            alert: {
                types: {
                    SUCCESS: 'success',
                    ERROR: 'error',
                },
                open: false,
                severity: '',
                message: ''
            },
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

        CommunicationService.getCategories()
            .then((res) => {
                this.setState({
                    categories: res.categories
                });
            })
            .catch(console.error)
    }

    handleChipClick = (inputTag) => {

        let categoryIndex = this.state.tags.findIndex(tag => tag.id == inputTag.id);
        let tagPriorityOrder = this.state.tagPriorityOrder;
        let currentTag = this.state.tags[categoryIndex];
        let tagIsSelected = currentTag.chipVariant !== 'default'

        if (!tagIsSelected) {
            let tagPriorityIndex =  tagPriorityOrder.indexOf(inputTag.id)
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

    getChipFromTag = (tag) => {
        return <Chip
            key={"chip-" + tag.id}
            icon={<LocalOfferIcon/>}
            label={tag.name}
            clickable
            color="primary"
            onClick={() => this.handleChipClick(tag)}
            variant={tag.chipVariant}
        />
    }

    handleFileChange = ({target}) => {
        this.setState({
            currentFile: target.files[0]
        });
    };

    handleFileRemove = () => {
        this.setState({
            currentFile: {
                name: ''
            }
        });
    };

    handleHTMLChange = (event) => {
        this.setState({
            currentHTML: event.target.value
        });
    }

    handlePostPriorityChange = (event) => {
        this.setState({
            currentPostPriority: event.target.value
        });
    }

    handlePostTextChange = (event) => {
        this.setState({
            currentPostText: event.target.value
        });
    }

    handleCategorySelectionChange = (event) => {
        this.setState({
            selectedCategoryId: event.target.value
        });
    }

    postCreateOnClick = () => {
        let tagPriorityOrder = this.state.tagPriorityOrder
        let body = {
            priority: this.state.currentPostPriority,
            category_id: this.state.selectedCategoryId,
            text: this.state.currentPostText,
            tags: this.state.tags
                .filter((tag) => tag.chipVariant === "default")
                .map((tag) => {
                    return {
                        id: tag.id,
                        interest: tagPriorityOrder.indexOf(tag.id)
                    }
                }),
        }

        if (this.state.currentFile.name != '') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(this.state.currentFile);
            fileReader.onload = (e) => {
                body['image'] = e.target.result;
                body['innerHTML'] = null;
                this.validateAndCallTheApi(body);
            };
        } else if (this.state.currentHTML != '') {
            body['innerHTML'] = this.state.currentHTML;
            body['image'] = null;
            this.validateAndCallTheApi(body);
        } else {
            this.validateAndCallTheApi(null)
        }
    }

    validateAndCallTheApi = (body) => {
        if (body === undefined || body === null || body.category_id === '' || body.text === ''
            || body.tags.length === 0 || body.priority === null || (body.image == null && body.innerHTML === '')) {
            this.handleAlertShow("Please fill in all the details...", this.state.alert.types.ERROR);
            return;
        }

        CommunicationService.createPost(body)
            .then((res) => {
                this.handleAlertShow("Success", this.state.alert.types.SUCCESS);
                this.clearObject()
            })
            .catch((err) => {
                this.handleAlertShow("Error while calling the API.", this.state.alert.types.ERROR);
                console.error(err);
            });
    }

    clearObject = () => {
        this.setState({
            currentPostText: '',
            currentHTML: '',
            currentFile: {
                name: ''
            },
            selectedCategoryId: undefined,
            tags: this.state.tags.map((tag) => {
                return {
                    ...tag,
                    chipVariant: 'outlined'
                }
            }),
            tagPriorityOrder: []
        });
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
        return (
            <div className={"sm-admin-posts"}>
                <SmAlert alert={this.state.alert} handleClose={this.handleAlertClose}/>
                <Card variant="outlined">
                    <CardContent className={"sm-admin-posts-panel"}>
                        <div className={"sm-admin-posts-left-panel"}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Text"
                                multiline
                                rows={4}
                                variant="outlined"
                                value={this.state.currentPostText}
                                onChange={this.handlePostTextChange}
                            />

                            <div className={"sm-admin-posts-left-panel-down-part"}>
                                <Typography variant="h6" gutterBottom>
                                    Choose what tags your post match...
                                </Typography>
                                <div className={"tag-chips"}>
                                    {
                                        this.state.tags.map((tag) => this.getChipFromTag(tag))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={"sm-admin-posts-right-panel"}>
                            <div className={"sm-admin-row"}>
                                <FormControl className={"category-element"}>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.selectedCategoryId}
                                        onChange={this.handleCategorySelectionChange}
                                    >
                                        {
                                            this.state.categories.map((category) => {
                                                return <MenuItem value={category.id}>{category.text}</MenuItem>
                                            })
                                        }
                                    </Select>
                                </FormControl>

                                <TextField
                                    className={"sm-post-priority"}
                                    label="Priority"
                                    type="number"
                                    value={this.state.currentPostPriority}
                                    onChange={this.handlePostPriorityChange}
                                />
                            </div>

                            <div className={"sm-admin-row"}>
                                <Typography variant="h6" gutterBottom>
                                    Additional informations about the post ...
                                </Typography>
                                <div className={"sm-admin-posts-panel-row right-panel-html upload-file-panel"}>
                                    <input
                                        accept="image/*"
                                        style={{display: "none"}}
                                        id="contained-button-file"
                                        type="file"
                                        onChange={this.handleFileChange}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            disabled={this.state.currentHTML != ''}
                                            startIcon={<CloudUploadIcon/>}
                                        >
                                            Choose a image ...
                                        </Button>
                                    </label>
                                    <div className={"upload-file-panel"}>
                                        <Typography variant="h6" gutterBottom>
                                            {this.state.currentFile.name}
                                        </Typography>

                                        <IconButton
                                            aria-label="delete"
                                            onClick={this.handleFileRemove}
                                            style={{display: this.state.currentFile.name != '' ? "block" : "none"}}
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className={"sm-admin-posts-panel-row right-panel-html"}>
                                    <Typography variant="h6" gutterBottom>
                                        OR
                                    </Typography>
                                </div>
                                <div className={"sm-admin-posts-panel-row right-panel-html"}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="HTML Markdown"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        value={this.state.currentHTML}
                                        disabled={this.state.currentFile.name != ''}
                                        onChange={this.handleHTMLChange}
                                    />
                                </div>
                                <div className={"sm-admin-posts-panel-row right-panel-html"}>
                                    <div dangerouslySetInnerHTML={{__html: this.state.currentHTML}}/>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="large"
                                onClick={this.postCreateOnClick}
                        >Create Post</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmAdminPosts;
