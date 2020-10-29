import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/account" component={Account} />
			<Route exact path="/login" component={Login} />
		</Switch>
	);
}
