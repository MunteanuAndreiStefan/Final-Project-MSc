import React, {Component} from 'react';
import './SmAlert.css';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SmAlert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Snackbar open={this.props.alert.open} autoHideDuration={6000}
                      onClose={this.props.handleClose}>
                <Alert severity={this.props.alert.severity}>
                    {this.props.alert.message}
                </Alert>
            </Snackbar>
        );
    }
}

export default SmAlert;
