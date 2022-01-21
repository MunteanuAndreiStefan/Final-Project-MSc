import React, {Component} from 'react';
import './SmAdminExperiences.css';
import * as CommunicationService from "../../services/CommunicationService";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

class SmAdminExperiences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            currentCategoryName: ''
        };
    }

    async componentDidMount() {
        this.populateCategories();
    }

    populateCategories = () => {
        CommunicationService.getCategories()
            .then((res) => {
                this.setState({
                    categories: res.categories
                })
            })
            .catch(console.error)
    }

    experienceCreateOnClick = (event) => {
        CommunicationService.createCategory(this.state.currentCategoryName)
            .then((res) => {
                this.populateCategories();
            })
            .catch(console.error)
    }

    handleCategoryNameChange = (event) => {
        this.setState({
            currentCategoryName: event.target.value
        })
    }

    render() {
        return (
            <div className={"sm-admin-experiences"}>
                <div className={"sm-admin-experiences-panel"}>
                    <div className={"sm-admin-experiences-left-panel"}>
                        <Typography variant="h4" gutterBottom>
                            Existing categories
                        </Typography>
                        <List>
                            {this.state.categories.map((category) => (
                                <ListItem button key={category.id}>
                                    <ListItemAvatar>
                                        <Avatar aria-label="recipe" className={"card-avatar"}>
                                            {category.text.slice(0, 1)}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={category.text}/>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={"sm-admin-experiences-right-panel"}>
                        <Card variant="outlined">
                            <CardContent>
                                <TextField id="standard-basic"
                                           label="Experience Name"
                                           value={this.state.currentCategoryName}
                                           onChange={this.handleCategoryNameChange}
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    onClick={this.experienceCreateOnClick}
                                >Create Experience</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmAdminExperiences;
