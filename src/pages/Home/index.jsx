import React from "react";

import { Container, Direct } from "./styles";

const Home = () => {
	return (
		<Container>
			<h1>Entrar no Jera Movies</h1>
			<Direct to="/login">Já tenho uma conta</Direct>
			<Direct to="/signup">Cadastrar</Direct>
		</Container>
	);
};

export default Home;
