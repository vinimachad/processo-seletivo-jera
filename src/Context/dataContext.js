import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export default function ProviderContexts({ children }) {
	const [typeMovie, setTypeMovie] = useState("adult");
	const [authenticated, setAuthenticated] = useState(false);
	const [indexAcc, setIndexAcc] = useState(null);
	const [inCreateAcc, setInCreateAcc] = useState(false);
	const [name, setName] = useState("");
	return (
		<Context.Provider
			value={{
				typeMovie,
				setTypeMovie,
				authenticated,
				setAuthenticated,
				indexAcc,
				setIndexAcc,
				inCreateAcc,
				setInCreateAcc,
				name,
				setName,
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
export function IndexAcc() {
	const context = useContext(Context);
	const { indexAcc, setIndexAcc } = context;
	return { indexAcc, setIndexAcc };
}
export function InCreateAcc() {
	const context = useContext(Context);
	const { inCreateAcc, setInCreateAcc, name, setName } = context;
	return { inCreateAcc, setInCreateAcc, name, setName };
}
