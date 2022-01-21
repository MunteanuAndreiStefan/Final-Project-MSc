import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './SmAuthScreen.css';
import {cyan} from '@material-ui/core/colors'

class SmAuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="sm-auth-screen">
                <div className={"center-controls"}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default SmAuthScreen;
