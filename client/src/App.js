import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import {Auth} from 'aws-amplify';
import './App.css';
import './App-min.css';
import './App-mid.css';
import SmPostFeed from "./components/sm-post-feed/SmPostFeed";
import Constants from "./Constants";
import SmQuestionnaires from "./components/sm-questionnaires/SmQuestionnaires";
import SmNavbar from "./components/sm-navbar/SmNavbar";
import SmProfile from "./components/sm-profile/SmProfile";
import {enhanceUser} from "./services/UserService";
import * as CommunicationService from "./services/CommunicationService";
import SmAuthScreen from "./components/sm-auth-screen/SmAuthScreen";
import SmAdminPanel from "./components/sm-admin-panel/SmAdminPanel";
import SmExperience from "./components/sm-experience/SmExperience";
import SMMessagesPage from "./components/sm-messages-page/SmMessagesPage";

function Feed(props) {
    return <SmPostFeed
        currentUser={props.state.currentUser}
        totalPostCount={props.state.totalPostCount}
        posts={props.state.posts}
        users={props.state.users}
    ></SmPostFeed>;
}

function Questionnaires(props) {
    return <SmQuestionnaires
        isAdmin={props.state.currentUser.type === 'ADMIN'}
        questionnaires={props.state.questionnaires}
        answeredQuestionnaireNumber={props.state.answeredQuestionnaireNumber}
        handleQuestionnaireDelete={props.__handleQuestionnaireDelete}
    ></SmQuestionnaires>;
}

function Experiences(props) {
    return <SmExperience
        categories={props.state.categories}
        currentUser={props.state.currentUser}
        totalPostCount={props.state.totalPostCount}
    ></SmExperience>;
}

function About() {
    return <h2>About</h2>;
}

function Profile(props) {
    return <SmProfile currentUser={props.state.currentUser}
                      subscriptions={props.state.subscriptions}
                      userWasNotInit={false}
                      changeUser={props.changeUser}
                      initUser={props.initUser}
    ></SmProfile>;
}

function AdminPanel(props) {
    return <SmAdminPanel></SmAdminPanel>;
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userWasNotInit: false,
            currentUser: {},
            posts: [],
            users: [],
            categories: [],
            subscriptions: [],
            questionnaires: []
        };
    }

    async isAuth() {
        const result = await Auth.currentAuthenticatedUser().then(user => {
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
        return result;
    }

    async componentDidMount() {
        const auth = await this.isAuth();
        if (!auth) {
            return;
        }
        Constants.AUTHORIZATION = `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        this.userHasAuthenticated(true);
        CommunicationService.getCurrentUser()
            .then((res) => {
                if (res.status === 404) {
                    this.setState({
                        userIsActive: res.message !== "User is not active.",
                        userWasNotInit: true,
                        currentUser: {
                            first_name: null,
                            last_name: null,
                            zip_code: null,
                            city: null,
                            country: null
                        }
                    });
                } else {
                    this.setState({
                        currentUser: enhanceUser(res),
                        userIsActive: res.active
                    })
                    CommunicationService.getSubscriptions()
                        .then((res) => this.setState({
                            subscriptions: res
                        }))
                        .catch(console.error)
                }
            })
            .catch(console.error)
    }

    userHasAuthenticated = authenticated => {
        this.setState({isAuthenticated: authenticated});
    };

    handleLogout = async event => {
        await Auth.signOut();

        this.userHasAuthenticated(false);
        this.props.history.push('/login');
    };

    handleLogin = () => {
        Auth.federatedSignIn();
    }

    _postFeedClick = (event) => {
        CommunicationService.getPosts()
            .then((res) => {
                this.setState({
                    totalPostCount: res.totalPostCount,
                    posts: res.posts,
                    users: res.users
                })
            })
            .catch(console.error)
    }

    _experienceFeedClick = (event) => {
        CommunicationService.getCategories()
            .then((res) => {
                this.setState({
                    categories: res.categories
                })
            })
            .catch(console.error)
    }

    _questionnaireClick = (event) => {
        CommunicationService.getQuestionnaires()
            .then((res) => {
                this.setState({
                    answeredQuestionnaireNumber: res.answeredQuestionnaireNumber,
                    questionnaires: res.questionnaires
                })
            })
            .catch(console.error)
    }

    _adminClick = (event) => {
    }

    changeUser = (user) => {
        this.setState({
            currentUser: {
                ...this.state.currentUser,
                ...user
            }
        });
    }

    initUser = (user) => {
        this.setState({
            currentUser: enhanceUser(user),
            userWasNotInit: false
        });
    }

    __handleQuestionnaireDelete = (questionnaireId) => {
        let questionnaires = this.state.questionnaires.filter(questionnaire => questionnaire.id != questionnaireId);
        this.setState({
            questionnaires: questionnaires
        });
    };

    getContent() {
        if (!this.state.isAuthenticated) {
            return <SmAuthScreen text={"Please login to continue."}></SmAuthScreen>;
        } else if (!this.state.userIsActive) {
            return <SmAuthScreen text={"Your account has been deactivated. Please contact an admin to solve the problem."}></SmAuthScreen>;
        } else if (this.state.userWasNotInit) {
            return <SmProfile currentUser={this.state.currentUser}
                              subscriptions={[]}
                              userWasNotInit={this.state.userWasNotInit}
                              changeUser={this.changeUser}
                              initUser={this.initUser}
            ></SmProfile>;
        } else if (this.state.currentUser === {}) {
            return <SmAuthScreen text={"Please wait ..."}></SmAuthScreen>;
        } else {
            const childProps = {
                isAuthenticated: this.state.isAuthenticated,
                userHasAuthenticated: this.userHasAuthenticated
            };

            let links = [];
            links.push(<Link onClick={this._postFeedClick} to="/feed">Feed</Link>)
            links.push(<Link onClick={this._questionnaireClick} to="/questionnaires">Questionnaires</Link>)
            links.push(<Link onClick={this._experienceFeedClick} to="/experiences">Experiences</Link>)
            links.push(<Link to="/about">About</Link>)
            links.push(<Link to="/messages">Messages</Link>)

            let routes = [];
            routes.push(<Route path="/feed">
                <Feed state={this.state}/>
            </Route>);
            routes.push(<Route path="/questionnaires">
                <Questionnaires state={this.state} __handleQuestionnaireDelete={this.__handleQuestionnaireDelete}/>
            </Route>);
            routes.push(<Route path="/experiences">
                <Experiences state={this.state}/>
            </Route>);
            routes.push(<Route path="/about">
                <About/>
            </Route>);
            routes.push(<Route path="/profile">
                <Profile state={this.state} changeUser={this.changeUser} initUser={this.initUser}/>
            </Route>);

            routes.push(<Route path="/messages">
                <SMMessagesPage state={this.state}/>
            </Route>)

            if (this.state.currentUser.type === 'ADMIN') {
                links.push(<Link onClick={this._adminClick} to="/admin">Admin Panel</Link>)
                routes.push(<Route path="/admin">
                    <AdminPanel state={this.state} changeUser={this.changeUser}/>
                </Route>);
            }

            return [
                <div className={"sm-sidebar"}>
                    <div className={"sm-left-panel"}>
                        {links}
                    </div>
                </div>,
                <div className={"sm-dashboard"}>
                    <Switch>
                        {routes}
                    </Switch>
                </div>
            ]
        }
    }


    render() {
        return (
            <div className={"AppContainer"}>
                <Router>
                    <div>
                        <div className={"sm-navbar"}>
                            <SmNavbar logOut={this.handleLogout}
                                      logIn={this.handleLogin}
                                      currentUser={this.state.currentUser}
                                      authenticated={this.state.isAuthenticated}
                                      userWasNotInit={this.state.userWasNotInit}
                            ></SmNavbar>
                        </div>
                        <div className={"sm-content"}>
                            {this.getContent()}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default withRouter(App);
