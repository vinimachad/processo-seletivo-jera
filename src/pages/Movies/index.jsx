import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import axios from "axios";
import SearchHeaderMovies from "../../components/SearchHeaderMovies";

const Movies = () => {
	const [listMovies, setListMovies] = useState([""]);
	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=38a0f840bcdd9b076080321a8e9000f0&sort_by=popularity.desc&certification_country=BR"
			)
			.then((res) => setListMovies(res.data.results));
	}, []);
	console.log(listMovies);
	return (
		<Container>
			<SearchHeaderMovies />
			<section className="row-list">
				<h1>Minha Lista</h1>
			</section>
			<section className="row-list">
				<h1>Filmes</h1>
				<ul className="grid-movies">
					{listMovies.map((mov, index) => (
						<li>{mov.original_title}</li>
					))}
				</ul>
			</section>
		</Container>
	);
};

export default Movies;
