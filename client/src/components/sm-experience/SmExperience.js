import React, {Component} from 'react';
import './SmExperience.css';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import SmQuestionnaire from "../sm-questionnaire/SmQuestionnaire";
import SmPostFeed from "../sm-post-feed/SmPostFeed";
import * as CommunicationService from "../../services/CommunicationService";

class SmExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuestionnaireIndex: -1,
            accordionControlExpand: false,
            searchBox: {
                label: 'Search',
                value: ''
            },
            posts: [],
            users: []
        };
    }

    __handleAccordionChange = (panel, index) => (event, isExpanded) => {
        this.setState({
            accordionControlExpand: isExpanded ? panel : false,
            selectedQuestionnaireIndex: index
        })
        let categoryId = this.props.categories[index].id;
        CommunicationService.getPostsByCategoryId(categoryId)
            .then((res) => {
                this.setState({
                    totalPostCount: res.totalPostCount,
                    posts: res.posts,
                    users: res.users
                })
            })
            .catch(console.error)
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
        let categoryList = this.props.categories
            .filter((category) => category.text.toLowerCase().includes(searchElement))
            .map((category, index) => {
                let panelName = 'panel' + category.id;
                return <Accordion questionnaire={category} expanded={this.state.accordionControlExpand === panelName}
                                  onChange={this.__handleAccordionChange(panelName, index)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <Typography variant="h5">{category.text}</Typography>
                    </AccordionSummary>
                </Accordion>;
            });

        let selectedIndex = this.state.selectedQuestionnaireIndex;
        let currentCategoryPosts = selectedIndex < 0 ? null : <SmPostFeed
            currentUser={this.props.currentUser}
            totalPostCount={this.state.totalPostCount}
            posts={this.state.posts}
            users={this.state.users}
        ></SmPostFeed>;

        return (
            <div className={"sm-experience"}>
                <Router>
                    <div className={"sm-experience-panel"}>
                        <div className={"sm-experience-left-panel"}>
                            <div className={"sm-line"}>
                                <div id={"search-field" + " search-without-counter"}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item className={"icon-search"}>
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
                            </div>

                            {categoryList}
                        </div>
                        <div className={"sm-experience-right-panel"}>
                            {currentCategoryPosts}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default SmExperience;
