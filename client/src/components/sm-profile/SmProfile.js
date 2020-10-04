import React, {Component} from 'react';
import './SmProfile.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import FaceIcon from "@material-ui/icons/Face";
import * as CommunicationService from "../../services/CommunicationService";
import {enhanceUser} from "../../services/UserService";

class SmProfile extends Component {
    constructor(props) {
        super(props);

        let userWasNotInit = props.userWasNotInit;

        this.state = {
            subscriptions: props.subscriptions,
            fieldsAreDisabled: !userWasNotInit,
            actionButtonName: userWasNotInit ? 'Save' : 'Edit'
        };
    }

    __handleContentChange = (event) => {
        let currentUser = this.props.currentUser;
    debugger;
        let keys = Object.keys(currentUser);
        for (let i = 0; i < keys.length; i++) {
            let value = currentUser[keys[i]];
            if (value === undefined || value === null || value.length < 3) {
                console.log('Field ' + keys[i] + ' does not match contraints.');
                return;
            }
        }
        let fieldsAreDisabled = this.state.fieldsAreDisabled;
        let buttonAction = fieldsAreDisabled ? 'Save' : 'Edit';
        this.setState({
            fieldsAreDisabled: !fieldsAreDisabled,
            actionButtonName: buttonAction
        })

        CommunicationService.changeUserDetails(currentUser)
            .then((res) => {
                this.props.initUser(res);
            })
            .catch(console.error)
    }

    __handleSubscriptionSelection = (event, subscriptionId) => {
        let modifiedUser = this.props.currentUser;
        CommunicationService.changeSubscription(subscriptionId)
            .then((res) => {
                modifiedUser.subscription_id = subscriptionId;
                this.props.changeUser(modifiedUser);
            })
            .catch(console.error)
    }

    getSubscriptionsDiv() {
        return this.props.subscriptions.map(subscription => {
            let subscriptionIsSelected = subscription.id == this.props.currentUser.subscription_id;
            let className = subscriptionIsSelected ? "sm-profile-subscription-selected" : null;
            let selectButton = subscriptionIsSelected ? null :
                <Button onClick={(event) => this.__handleSubscriptionSelection(event, subscription.id)} color="primary">Select</Button>;

            return <Card key={subscription.id} className={className}>
                <CardHeader
                    title={subscription.name}
                    subheader={subscription.description}
                    titleTypographyProps={{variant: "h5"}}
                    subheaderTypographyProps={{variant: "h6"}}
                />
                <CardContent>
                    <div style={{display: "block", height: 60}}>
                        <Typography variant="subtitle1" component="p">
                            {subscription.post_limit === -1 ? 'Unlimited' : subscription.post_limit} Posts
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            {subscription.questionnaire_limit === -1 ? 'Unlimited' : subscription.questionnaire_limit} Questionnaires
                        </Typography>
                        {
                            subscription.comments_active ? <Typography variant="subtitle1" component="p">Comment capability</Typography> : null
                        }
                        {
                            subscription.reactions_active ? <Typography variant="subtitle1" component="p">Reaction capability</Typography> : null
                        }
                        <Typography variant="subtitle1" component="p">
                            {subscription.support} Support
                        </Typography>
                    </div>
                </CardContent>
                <CardContent className={"sm-profile-subscription-footer"}>
                    <div className={"float_left"}>
                        ${subscription.price}
                    </div>
                    <div className={"float_right"}>
                        {selectButton}
                    </div>
                </CardContent>
            </Card>
        });
    }

    handleFieldChange = (event) => {
        let currentUser = this.props.currentUser;
        currentUser[event.target.id] = event.target.value;
        this.props.changeUser(currentUser);
    }

    render() {
        let subscriptions = this.getSubscriptionsDiv();
        let headerInfo = this.props.userWasNotInit ? <Typography variant="h4" component="h2" className={"sm-profile-header-info"}>
            Before we continue, please complete the following details
        </Typography> : null;
        return (
            <div className={this.props.userWasNotInit ? "sm-profile-init" : "sm-profile"}>
                {headerInfo}
                <Card>
                    <CardHeader titleTypographyProps={{variant: "h5"}}
                        title={this.props.currentUser.full_name}
                    />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <TextField id="first_name"
                                           label="First name"
                                           disabled={this.state.fieldsAreDisabled}
                                           value={this.props.currentUser.first_name}
                                           onChange={this.handleFieldChange}
                                           required
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField id="last_name"
                                           label="Last name"
                                           disabled={this.state.fieldsAreDisabled}
                                           value={this.props.currentUser.last_name}
                                           onChange={this.handleFieldChange}
                                           required={true}
                                />
                            </Grid>
                            {
                                this.props.userWasNotInit ? null : <Grid item xs>
                                    <TextField id="email"
                                               label="Email"
                                               disabled={this.state.fieldsAreDisabled}
                                               value={this.props.currentUser.email}
                                               onChange={this.handleFieldChange}
                                               required={true}
                                    />
                                </Grid>
                            }
                        </Grid>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <TextField id="zip_code"
                                           label="Zip Code"
                                           disabled={this.state.fieldsAreDisabled}
                                           value={this.props.currentUser.zip_code}
                                           onChange={this.handleFieldChange}
                                           required={true}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField id="city"
                                           label="City"
                                           disabled={this.state.fieldsAreDisabled}
                                           value={this.props.currentUser.city}
                                           onChange={this.handleFieldChange}
                                           required={true}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField id="country"
                                           label="Country"
                                           disabled={this.state.fieldsAreDisabled}
                                           value={this.props.currentUser.country}
                                           onChange={this.handleFieldChange}
                                           required={true}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Button variant="contained" color="primary"
                        onClick={this.__handleContentChange}>
                    {this.state.actionButtonName}
                </Button>

                <div className={"sm-profile-subscriptions"}>
                    {subscriptions}
                </div>

            </div>
        );
    }
}

export default SmProfile;
