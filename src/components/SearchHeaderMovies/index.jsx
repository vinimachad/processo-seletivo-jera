import React from "react";

import { Container } from "./styles";

const SearchHeaderMovies = () => {
	return (
		<Container>
			<h1 className="title">Jera Movies</h1>
			<form action="">
				<input
					className="input-search"
					type="text"
					placeholder="Busque por filmes..."
				/>
				<button className="btn-search" type="submit">
					Buscar
				</button>
			</form>
			<a className="a-account" href="./account">
				Contas
			</a>
		</Container>
	);
};

export default SearchHeaderMovies;
