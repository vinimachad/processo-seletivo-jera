import React from "react";
import { Router } from "react-router-dom";

import GlobalStyles from "./styles/global";

import Routes from "./routes";
import history from "./history";
import ProviderContexts from "./Context/dataContext";

function App() {
	return (
		<ProviderContexts>
			<Router history={history}>
				<GlobalStyles />
				<Routes />
			</Router>
		</ProviderContexts>
	);
}

export default App;
