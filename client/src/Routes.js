import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
// import Login from './notNeeded/Login';
// import Signup from './notNeeded/Signup';

export default ({ childProps }) => (
	<Switch>
		<AppliedRoute path="/" exact component={Home} props={childProps} />
		{/*<AppliedRoute path="/login" exact component={Login} props={childProps} />*/}
		{/*<AppliedRoute path="/signup" exact component={Signup} props={childProps} />*/}
		<Route component={NotFound} />
	</Switch>
);
