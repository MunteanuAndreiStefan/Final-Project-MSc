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
        let modifiedUser = this.state.currentUser;
        modifiedUser.subscription_id = subscriptionId;
        this.setState({
            currentUser: modifiedUser
        });
    }

    getSubscriptionsDiv() {
        return this.state.subscriptions.map(subscription => {
            let subscriptionIsSelected = subscription.id === this.state.currentUser.subscription_id;
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
                        {
                            subscription.feature_list.map(feature => {
                                return <Typography variant="subtitle1" component="p">
                                    {feature}
                                </Typography>
                            })
                        }
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
                        title={this.state.currentUser.full_name}
                    />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <TextField label="First name" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.state.currentUser.first_name} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Last name" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.state.currentUser.last_name} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Email" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.state.currentUser.email} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <TextField label="Zip Code" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.state.currentUser.zip_code} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="City" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.state.currentUser.city} />
                            </Grid>
                            <Grid item xs>
                                <TextField label="Country" disabled={this.state.fieldsAreDisabled}
                                           defaultValue={this.state.currentUser.country} />
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
