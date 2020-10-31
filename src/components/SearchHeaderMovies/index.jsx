import React from "react";
import { MdSearch } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import { Container } from "./styles";

const SearchHeaderMovies = ({ inpReference, onSubmit }) => {
	const { id, type } = useParams();
	return (
		<Container>
			<Link to={`/account/${id}/movie/${type}`} className="title">
				Jera Movies
			</Link>
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
			<Link className="a-account" to={`/account/${id}`}>
				Contas
			</Link>
		</Container>
	);
};

export default SearchHeaderMovies;
