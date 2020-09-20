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
        this.state = {
            currentUser: props.currentUser,
            subscriptions: props.subscriptions,
            fieldsAreDisabled: true,
            actionButtonName: 'Edit'
        };
    }

    __handleContentChange = (event) => {
        let fieldsAreDisabled = this.state.fieldsAreDisabled;
        let buttonAction = fieldsAreDisabled ? 'Save' : 'Edit';
        this.setState({
            fieldsAreDisabled: !fieldsAreDisabled,
            actionButtonName: buttonAction
        })

        if (buttonAction === 'Edit') {
            console.log('Send to server');
        }
    }

    __handleSubscriptionSelection = (event, subscriptionId) => {
        let modifiedUser = this.props.currentUser;

        CommunicationService.changeSubscription(subscriptionId)
            .then((res) => {
                modifiedUser.subscription_id = subscriptionId;
                this.setState({
                    currentUser: modifiedUser
                });
                console.log('changeSubscription', res)
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

    render() {
        let subscriptions = this.getSubscriptionsDiv();
        return (
            <div className={"sm-profile"}>
                <Card>
                    <CardHeader titleTypographyProps={{variant: "h5"}}
                        title={this.props.currentUser.full_name}
                    />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <TextField label="First name" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.props.currentUser.first_name} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Last name" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.props.currentUser.last_name} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Email" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.props.currentUser.email} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <TextField label="Zip Code" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.props.currentUser.zip_code} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="City" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.props.currentUser.city} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Country" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.props.currentUser.country} />
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
