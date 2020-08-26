import React, {Component} from 'react';
import './SmLeftPanel.css';

class SmLeftPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div className={"sm-left-panel"}>
                <a href="#">Feed</a>
                <a href="#">Questionnaires</a>
                <a href="#">About</a>
            </div>
        );
    }
}

export default SmLeftPanel;
