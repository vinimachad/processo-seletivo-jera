import React, { useEffect, useRef, useState } from "react";

import { Container } from "./styles";
import axios from "axios";
import SearchHeaderMovies from "../../components/SearchHeaderMovies";
import { apiTMDB, API_KEY } from "../../Tmdb";
import history from "../../history";
import { useParams } from "react-router-dom";
const Movies = () => {
	const searchRef = useRef("");
	const { id, type } = useParams();
	const [listMovies, setListMovies] = useState([""]);
	useEffect(() => {
		if (type === "adult") {
			axios
				.get(
					`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&certification_country=BR`
				)
				.then((res) => setListMovies(res.data.results));
		} else {
			apiTMDB
				.get(
					`discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&certification_country=BR&certification=L&certification.lte=L&include_adult=false&include_video=false&page=1`
				)
				.then((res) => setListMovies(res.data.results));
		}
	}, []);

	function handleSearch(e) {
		e.preventDefault();
		let search = searchRef.current?.value;
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
			)
			.then((res) => setListMovies(res.data.results));
	}
	function handleClickMovie(idM) {
		history.push(`/account/${id}/movie/${type}/${idM}`);
	}
	return (
		<Container>
			<SearchHeaderMovies inpReference={searchRef} onSubmit={handleSearch} />
			{
				<section className="row-list">
					<h1>Minha Lista</h1>
				</section>
			}
			<section className="row-list">
				<h1>Filmes</h1>
				<ul className="grid-movies">
					{listMovies.map((mov, index) => (
						<li onClick={() => handleClickMovie(mov.id)} key={index}>
							<img
								className="poster-movie"
								src={`https://image.tmdb.org/t/p/w200${mov.poster_path}`}
								alt=""
							/>
							<strong>{mov.original_title}</strong>
						</li>
					))}
				</ul>
			</section>
		</Container>
	);
};

export default Movies;
