import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SmLeftPanel from './components/sm-left-panel/SmLeftPanel'
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Routes from './Routes';
import {Auth} from 'aws-amplify';

import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SmPostFeed from "./components/sm-post-feed/SmPostFeed";
import Constants from "./Constants";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SmQuestionnaires from "./components/sm-questionnaires/SmQuestionnaires";
import SmQuestionnaire from "./components/sm-questionnaire/SmQuestionnaire";


function Feed() {
    return <SmPostFeed
        posts={Constants.MOCK_DATA.posts}
        users={Constants.MOCK_DATA.users}
        current_user_id={Constants.MOCK_DATA.current_user_id}
    ></SmPostFeed>;
}

function Questionnaires() {
    return <SmQuestionnaires
        questionnaires={Constants.MOCK_DATA.questionnaires}
    ></SmQuestionnaires>;
}

function About() {
    return <h2>About</h2>;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    async componentDidMount() {
        try {
            if (await Auth.currentSession()) {
                this.userHasAuthenticated(true);
            }
        } catch (e) {
            if (e !== 'No current user') {
                alert(e);
            }
        }

        this.setState({isAuthenticating: false});
    }

    userHasAuthenticated = authenticated => {
        this.setState({isAuthenticated: authenticated});
    };

    handleLogout = async event => {
        await Auth.signOut();

        this.userHasAuthenticated(false);
        this.props.history.push('/login');
    };

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };

        let links = [];
        links.push(<Link to="/feed">Feed</Link>)
        links.push(<Link to="/questionnaires">Questionnaires</Link>)
        links.push(<Link to="/about">About</Link>)

        let routes = [];
        routes.push(<Route path="/feed"><Feed/></Route>);
        routes.push(<Route path="/questionnaires"><Questionnaires/></Route>);
        routes.push(<Route path="/about"><About/></Route>);


        return (
            <div className={"AppContainer"}>
                <div className={"sm-navbar"}>
                    <Navbar className={"AppNavbar"} fluid collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Social Media Demo App</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem onClick={() => Auth.federatedSignIn()}>Open Hosted UI</NavItem>
                                <NavItem onClick={this.handleLogout}>Logout</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Router>
                    <div className={"sm-content"}>
                        <div className={"sm-sidebar"}>
                            <div className={"sm-left-panel"}>
                                {links}
                            </div>
                        </div>
                        <div className={"sm-dashboard"}>
                            <Switch>
                                {routes}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default withRouter(App);
