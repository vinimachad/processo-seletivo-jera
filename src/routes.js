import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Movies from "./pages/Movies";
import { IsAuthenticated } from "./Context/dataContext";

export default function Routes() {
	const { authenticated } = IsAuthenticated();

	function CustomRoute({ isPrivate, ...rest }) {
		if (isPrivate && !authenticated) {
			return <Redirect to="/signup" />;
		}

		return <Route {...rest} />;
	}

	return (
		<Switch>
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/login" component={Login} />
			<CustomRoute isPrivate exact path="/account" component={Account} />
			<CustomRoute isPrivate exact path="/movies" component={Movies} />
		</Switch>
	);
}
