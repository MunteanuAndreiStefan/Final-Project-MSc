import React, {Component} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import './SmContactInfoDialog.css';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

class SmContactInfoDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.__handleClose.bind(this);
        this.__handleListItemClick.bind(this);
    }

    __handleClose = (selectedValue) => {
        this.props.onClose(selectedValue);
    };

    __handleListItemClick = (value) => {
        this.props.onClose(value);
    };

    render() {

        let contact = this.props.contact;
        let contactInfoDiv = contact === null || contact === undefined || contact === {} ? null :
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {contact.first_name + " " + contact.last_name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {contact.email}
                    </Typography>
                    <Typography variant="h6">
                        {contact.username}
                    </Typography>
                    <Typography variant="h6" component="p">
                        {contact.address}
                        <br />
                        {contact.city}
                    </Typography>
                </CardContent>
            </Card>

        return (
            <div className={"sm-reaction-dialog"}>
                <Dialog onClose={this.__handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
                    {contactInfoDiv}
                </Dialog>
            </div>
        );
    }
}

export default SmContactInfoDialog;
