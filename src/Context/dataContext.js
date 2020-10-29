import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export default function ProviderContexts({ children }) {
	const [dataUser, setDataUser] = useState({});
	return (
		<Context.Provider
			value={{
				dataUser,
				setDataUser,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export function useUserData() {
	const context = useContext(Context);
	const { dataUser, setDataUser } = context;
	return { dataUser, setDataUser };
}
