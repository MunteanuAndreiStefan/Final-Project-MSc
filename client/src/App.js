import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SmLeftPanel from './components/sm-left-panel/SmLeftPanel'
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Routes from './Routes';
import {Auth} from 'aws-amplify';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
import SmNavbar from "./components/sm-navbar/SmNavbar";
import SmSidebar from "./components/sm-sidebar/SmSidebar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SmProfile from "./components/sm-profile/SmProfile";
import {enhanceUser} from "./services/UserService";
import * as CommunicationService from "./services/CommunicationService";

function Feed(props) {
    let currentUser = props.state.current_user;
    let currentUserId = currentUser ? currentUser.id : null;

    return <SmPostFeed
        currentUser={props.state.currentUser}
        posts={props.state.posts}
        users={props.state.users}
        current_user_id={currentUserId}
    ></SmPostFeed>;
}

function Questionnaires(props) {
    return <SmQuestionnaires
        questionnaires={props.state.questionnaires}
    ></SmQuestionnaires>;
}

function About() {
    return <h2>About</h2>;
}

function Profile(props) {
    return <SmProfile currentUser={props.state.currentUser}
                      subscriptions={props.state.subscriptions}
    ></SmProfile>;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true,
            currentUser: enhanceUser(Constants.MOCK_DATA.current_user),
            posts: [],
            users: Constants.MOCK_DATA.users,
            subscriptions: Constants.MOCK_DATA.subscriptions,
            questionnaires: Constants.MOCK_DATA.questionnaires
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
        this.userHasAuthenticated(false);
    }

    userHasAuthenticated = authenticated => {
        this.setState({
            isAuthenticated: authenticated,
        });
        this.forceUpdate()
    };

    handleLogin = () => {
        Auth.federatedSignIn();
    }

    handleLogout = async event => {
        await Auth.signOut();

        this.userHasAuthenticated(false);
        this.props.history.push('/login');
    };

    _postFeedClick = (event) => {
        CommunicationService.getPosts()
            .then((res) => {
                this.setState({
                    posts: res.body
                })
            })
            .catch(console.error)
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };

        let links = [];
        links.push(<Link onClick={this._postFeedClick} to="/feed">Feed</Link>)
        links.push(<Link to="/questionnaires">Questionnaires</Link>)
        links.push(<Link to="/about">About</Link>)

        let routes = [];
        routes.push(<Route path="/feed">
            <Feed state={this.state}/>
        </Route>);
        routes.push(<Route path="/questionnaires">
            <Questionnaires state={this.state}/>
        </Route>);
        routes.push(<Route path="/about">
            <About/>
        </Route>);
        routes.push(<Route path="/profile">
            <Profile state={this.state}/>
        </Route>);

        return (
            <div className={"AppContainer"}>
                <Router>
                    <div>
                        <div className={"sm-navbar"}>
                            <SmNavbar logOut={this.handleLogout} logIn={this.handleLogin}
                                      currentUser={this.state.currentUser}
                            ></SmNavbar>
                        </div>
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
                    </div>
                </Router>
            </div>
        );
    }
}

export default withRouter(App);
