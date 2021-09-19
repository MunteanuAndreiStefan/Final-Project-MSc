import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import {Auth} from 'aws-amplify';
import './App.css';
import './App-min.css';
import './App-mid.css';
import './SmDrawer.css';
import SmPostFeed from "./components/sm-post-feed/SmPostFeed";
import Constants from "./Constants";
import SmQuestionnaires from "./components/sm-questionnaires/SmQuestionnaires";
import SmProfile from "./components/sm-profile/SmProfile";
import {enhanceUser} from "./services/UserService";
import * as CommunicationService from "./services/CommunicationService";
import SmAuthScreen from "./components/sm-auth-screen/SmAuthScreen";
import SmAdminPanel from "./components/sm-admin-panel/SmAdminPanel";
import SmExperience from "./components/sm-experience/SmExperience";
import SMMessagesPage from "./components/sm-messages-page/SmMessagesPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import SMNotifications from "./components/sm-notifications/SmNotifications";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import {Button} from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {ClearAll, DynamicFeed, Info, Message, Tune} from "@material-ui/icons";

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
            open: false,
            isAuthenticated: false,
            userWasNotInit: false,
            currentUser: {},
            posts: [],
            users: [],
            categories: [],
            subscriptions: [],
            questionnaires: [],
            anchorEl: null,
            mobileMoreAnchorEl: null,
            isMenuOpen: Boolean(null),
            isMobileMenuOpen: Boolean(null)
        };

        this.handleDrawerOpen.bind(this);
        this.handleDrawerClose.bind(this);
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true
        });
    };

    handleDrawerClose = () => {
        this.setState({
            open: false
        });
    };

    handleProfileMenuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            isMenuOpen: Boolean(event.currentTarget)
        })
    };

    handleMobileMenuClose = () => {
        this.setState({
            mobileMoreAnchorEl: null,
            isMobileMenuOpen: Boolean(null)
        })
    };

    handleMenuClose = () => {
        this.setState({
            anchorEl: null,
            mobileMoreAnchorEl: null,
            isMenuOpen: Boolean(null),
            isMobileMenuOpen: Boolean(null)
        })
    };

    handleMobileMenuOpen = (event) => {
        this.setState({
            mobileMoreAnchorEl: event.currentTarget,
            isMobileMenuOpen: Boolean(null)
        })
    };

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
            return <SmAuthScreen
                text={"Your account has been deactivated. Please contact an admin to solve the problem."}></SmAuthScreen>;
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
            links.push(
                <Link onClick={this._postFeedClick} to="/feed">
                    <ListItem key={'link-feed'} button>
                        <ListItemIcon><DynamicFeed/></ListItemIcon>
                        <ListItemText primary={"Feed"}/>
                    </ListItem>
                </Link>
            )

            links.push(
                <Link onClick={this._questionnaireClick} to="/questionnaires">
                    <ListItem key={'link-questionnaires'} button>
                        <ListItemIcon><ContactSupportIcon/></ListItemIcon>
                        <ListItemText primary={"Questionnaires"}/>
                    </ListItem>
                </Link>
            )
            links.push(
                <Link onClick={this._experienceFeedClick} to="/experiences">
                    <ListItem key={'link-experiences'} button>
                        <ListItemIcon><ClearAll/></ListItemIcon>
                        <ListItemText primary={"Experiences"}/>
                    </ListItem>
                </Link>
            )
            links.push(
                <Link to="/about">
                    <ListItem key={'link-about'} button>
                        <ListItemIcon><Info/></ListItemIcon>
                        <ListItemText primary={"About"}/>
                    </ListItem>
                </Link>
            )
            links.push(
                <Link to="/messages">
                    <ListItem key={'link-messages'} button>
                        <ListItemIcon><Message/></ListItemIcon>
                        <ListItemText primary={"Messages"}/>
                    </ListItem>
                </Link>
            )

            let routes = [];
            routes.push(<Route key={'route-feed'} path="/feed">
                <Feed state={this.state}/>
            </Route>);
            routes.push(<Route key={'route-questionnaires'} path="/questionnaires">
                <Questionnaires state={this.state} __handleQuestionnaireDelete={this.__handleQuestionnaireDelete}/>
            </Route>);
            routes.push(<Route key={'route-experiences'} path="/experiences">
                <Experiences state={this.state}/>
            </Route>);
            routes.push(<Route key={'route-about'} path="/about">
                <About/>
            </Route>);
            routes.push(<Route key={'route-profile'} path="/profile">
                <Profile state={this.state} changeUser={this.changeUser} initUser={this.initUser}/>
            </Route>);

            routes.push(<Route key={'route-messages'} path="/messages">
                <SMMessagesPage state={this.state}/>
            </Route>)

            if (this.state.currentUser.type === 'ADMIN') {
                links.push(
                    <Link onClick={this._adminClick} to="/admin">
                        <ListItem key={'link-admin'} button>
                            <ListItemIcon><Tune/></ListItemIcon>
                            <ListItemText primary={"Admin Panel"}/>
                        </ListItem>
                    </Link>
                )
                routes.push(<Route key={'route-admin'} path="/admin">
                    <AdminPanel state={this.state} changeUser={this.changeUser}/>
                </Route>);
            }

            return {
                links: links,
                content: <div className={"sm-dashboard"}>
                    <Switch>
                        {routes}
                    </Switch>
                </div>
            }
        }
    }

    render() {
        const menuId = 'primary-search-account-menu';
        const renderMenu = (
            <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={menuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <Link to="/profile">
                    <MenuItem onClick={this.handleMenuClose}>
                        My account
                    </MenuItem>
                </Link>
                <MenuItem onClick={this.props.logOut}>Log out</MenuItem>
            </Menu>
        );

        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.state.isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        let appNameClass = 'appBar ';
        let iconButtonClass = ''
        let mainClass = 'content '
        if (this.state.open) {
            appNameClass += 'appBarShift';
            iconButtonClass += 'hide';
            mainClass += 'contentShift';
        }
        let content = this.getContent();
        let links = [];
        if (content.links) {
            links = content.links;
            content = content.content
        }

        let rightNavbarSide = null;
        debugger
        if (this.state.userWasNotInit) {
            rightNavbarSide = <div>
                <Button onClick={this.handleLogout}
                        variant="contained" color="primary">
                    Log out
                </Button>
            </div>
        } else if (!this.state.isAuthenticated) {
            rightNavbarSide = <div>
                <Button onClick={this.handleLogin}
                        variant="contained" color="primary">
                    Log in
                </Button>
            </div>
        } else {
            rightNavbarSide = <div>
                <Chip
                    className={"userChip"}
                    style={{marginLeft: "10px"}}
                    avatar={<Avatar>{this.state.currentUser.avatar}</Avatar>}
                    label={this.state.currentUser.full_name}
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={'primary-search-account-menu'}
                    aria-haspopup="true"
                    clickable
                    color="primary"
                    onClick={this.handleProfileMenuOpen}
                    variant="outlined"
                />
            </div>
        }

        return (
            <div className={"AppContainer"}>
                <Router>
                    <div className={'root'}>
                        <CssBaseline/>
                        <AppBar
                            position="fixed"
                            className={appNameClass}
                        >
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={this.handleDrawerOpen}
                                    className={iconButtonClass}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="h4" noWrap className={'title'}>
                                    Social Media Title
                                </Typography>

                                <Grid item xs className={"row top-grid"}>
                                    <div>
                                        <SMNotifications/>
                                    </div>
                                    <div>
                                        {rightNavbarSide}
                                    </div>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        {renderMobileMenu}
                        {renderMenu}
                        <main
                            className={mainClass}
                        >
                            <div className={'drawerHeader'}/>
                            {content}
                        </main>
                        <Drawer
                            className={'drawer'}
                            variant="persistent"
                            anchor="left"
                            open={this.state.open}
                            classes={{
                                paper: 'drawerPaper',
                            }}
                        >
                            <div className={'drawerHeader'}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    <ChevronLeftIcon/>
                                </IconButton>
                            </div>
                            <Divider/>
                            <List>
                                {links}
                            </List>
                        </Drawer>
                    </div>
                </Router>
            </div>
        );
    }
}

export default withRouter(App);
