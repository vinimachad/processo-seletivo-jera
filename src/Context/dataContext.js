import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export default function ProviderContexts({ children }) {
	const [typeMovie, setTypeMovie] = useState("adult");
	const [authenticated, setAuthenticated] = useState(false);
	return (
		<Context.Provider
			value={{
				typeMovie,
				setTypeMovie,
				authenticated,
				setAuthenticated,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export function MovieType() {
	const context = useContext(Context);
	const { typeMovie, setTypeMovie } = context;
	return { typeMovie, setTypeMovie };
}
export function IsAuthenticated() {
	const context = useContext(Context);
	const { authenticated, setAuthenticated } = context;
	return { authenticated, setAuthenticated };
}
