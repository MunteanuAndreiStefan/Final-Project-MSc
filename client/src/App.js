import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SmLeftPanel from './components/sm-left-panel/SmLeftPanel'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import { Auth } from 'aws-amplify';

import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SmPostFeed from "./components/sm-post-feed/SmPostFeed";
import Constants from "./Constants";

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

		this.setState({ isAuthenticating: false });
	}

	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
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
		return (
			<div className={"AppContainer"}>
				<div className={"sm-navbar"}>
					<Navbar className={"AppNavbar"} fluid collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand>
								<Link to="/">Social Media Demo App</Link>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav pullRight>
								<NavItem onClick={() => Auth.federatedSignIn()}>Open Hosted UI</NavItem>
								<NavItem onClick={this.handleLogout}>Logout</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<div className={"sm-content"}>
					<div className={"sm-sidebar"}>
						<SmLeftPanel></SmLeftPanel>
					</div>
					<div className={"sm-dashboard"}>
						<SmPostFeed
							posts={Constants.MOCK_DATA.posts}
							users={Constants.MOCK_DATA.users}
						></SmPostFeed>
					</div>
				</div>

				<Routes childProps={childProps} />

			</div>
		);
	}
}

export default withRouter(App);
