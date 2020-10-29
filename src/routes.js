import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account/Account";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/account" component={Account} />
		</Switch>
	);
}
