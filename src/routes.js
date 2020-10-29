import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Context } from "./Context/AuthContext";

import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account";

function CustomRoute({ isPrivate, ...rest }) {
	const { loading, authenticated } = useContext(Context);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (isPrivate && !authenticated) {
		return <Redirect to="/signup" />;
	}

	return <Route {...rest} />;
}

export default function Routes() {
	return (
		<Switch>
			<CustomRoute exact path="/signup" component={SignUp} />
			<CustomRoute isPrivate exact path="/account" component={Account} />
		</Switch>
	);
}
