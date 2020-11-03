import React, { useEffect, useRef, useState } from "react";

import { Container } from "./styles";
import axios from "axios";
import SearchHeaderMovies from "../../components/SearchHeaderMovies";
import { apiTMDB, API_KEY } from "../../Tmdb";
import history from "../../history";
import { InCreateAcc, IndexAcc } from "../../Context/dataContext";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/apiFirebase";
const Movies = () => {
	const searchRef = useRef("");
	const { id, type } = useParams();
	const { indexAcc } = IndexAcc();
	const [listMovies, setListMovies] = useState([""]);
	const [myList, setMyList] = useState(null);
	const [myWatch, setMyWatch] = useState(null);
	const { inCreateAcc, name } = InCreateAcc();

	useEffect(() => {
		let kidUrl =
			"&language=pt-BR&sort_by=popularity.desc&certification_country=BR&certification=L&certification.lte=L&include_adult=false&include_video=false&page=1";

		apiTMDB
			.get(
				`discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&certification_country=BR${
					type === "kid" ? kidUrl : ""
				}`
			)
			.then((res) => setListMovies(res.data.results));

		let listRef = db.collection("users").doc(id);

		if (inCreateAcc) {
			listRef.get().then((res) => setMyList(res.data()[name].listMark));

			listRef.get().then((res) => setMyWatch(res.data()[name].listWatch));
		} else {
			listRef.get().then((res) => setMyList(res.data()[type].listMark));

			listRef.get().then((res) => setMyWatch(res.data()[type].listWatch));
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
			{myList !== null ? (
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
			{myWatch !== null ? (
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
