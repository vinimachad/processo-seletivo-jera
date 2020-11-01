import React, { useEffect, useRef, useState } from "react";

import { Container } from "./styles";
import axios from "axios";
import SearchHeaderMovies from "../../components/SearchHeaderMovies";
import { API_KEY } from "../../Tmdb";
import history from "../../history";
import { IndexAcc } from "../../Context/dataContext";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/apiFirebase";
const Movies = () => {
	const searchRef = useRef("");
	const { id, type } = useParams();
	const { indexAcc } = IndexAcc();
	const [listMovies, setListMovies] = useState([""]);
	const [myList, setMyList] = useState([""]);
	const [myWatch, setMyWatch] = useState([""]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&certification_country=BR`
			)
			.then((res) => setListMovies(res.data.results));
		let listRef = db.collection("users").doc(id);
		listRef.get().then((res) => setMyList(res.data()[type].listMark));

		listRef.get().then((res) => setMyWatch(res.data()[type].listWatch));
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
			{myList !== "" ? (
				<section className="row-list">
					<h1>Minha Lista</h1>
					<ul className="grid-movies">
						{myList.map((mov, index) => (
							<li onClick={() => handleClickMovie(mov.idMark)} key={index}>
								<img
									className="poster-movie"
									src={`https://image.tmdb.org/t/p/w200${mov.poster}`}
									alt=""
								/>
								<strong>{mov.title}</strong>
							</li>
						))}
					</ul>
				</section>
			) : (
				""
			)}
			{myWatch !== "" ? (
				<section className="row-list">
					<h1>Volte a assistir</h1>
					<ul className="grid-movies">
						{myWatch.map((mov, index) => (
							<li onClick={() => handleClickMovie(mov.idMark)} key={index}>
								<img
									className="poster-movie"
									src={`https://image.tmdb.org/t/p/w200${mov.poster}`}
									alt=""
								/>
								<strong>{mov.title}</strong>
							</li>
						))}
					</ul>
				</section>
			) : (
				""
			)}
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
