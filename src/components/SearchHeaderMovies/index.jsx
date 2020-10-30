import React from "react";
import { MdSearch } from "react-icons/md";

import { Container } from "./styles";

const SearchHeaderMovies = ({ inpReference, onSubmit }) => {
	return (
		<Container>
			<h1 className="title">Jera Movies</h1>
			<form onSubmit={onSubmit}>
				<input
					className="input-search"
					type="text"
					placeholder="Busque por filmes..."
					ref={inpReference}
				/>
				<button className="btn-search" type="submit">
					<MdSearch size={14} color={"white"} />
				</button>
			</form>
			<a className="a-account" href="./account">
				Contas
			</a>
		</Container>
	);
};

export default SearchHeaderMovies;
