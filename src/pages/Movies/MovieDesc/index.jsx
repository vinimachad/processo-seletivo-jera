import React, { useEffect, useState } from "react";
import { MdBookmark, MdExitToApp, MdPlayArrow } from "react-icons/md";
import { useParams } from "react-router-dom";
import history from "../../../history";
import { apiTMDB, API_KEY } from "../../../Tmdb";
import apiFirebase from "../../../firebase/apiFirebase";

import { Container } from "./styles";

const MovieDesc = () => {
	const { idMovie, type, id } = useParams();
	const [movie, setMovie] = useState("");

	// const { authenticated } = IsAuthenticated();
	useEffect(() => {
		apiTMDB
			.get(`movie/${idMovie}?api_key=${API_KEY}&language=pt-BR`)
			.then((res) => setMovie(res.data));
	}, []);

	function handleSaveMyList() {
		let save = apiFirebase.updateUser(id, type, idMovie, idMovie);
		return save;
	}
	function handleMarkWatch() {}

	return (
		<Container>
			<div className="overlay">
				<img
					className="poster"
					src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
					alt=""
				/>
				<div className="description">
					<h1>{movie.original_title}</h1>
					<p>{movie.overview}</p>
				</div>
				<div className="functions">
					<button onClick={handleSaveMyList}>
						<MdBookmark size={30} />
					</button>
					<button onClick={handleMarkWatch}>
						<MdPlayArrow size={30} />
					</button>
					<button onClick={() => history.goBack(`account/${id}/movie/${type}`)}>
						<MdExitToApp size={30} />
					</button>
				</div>
			</div>
			<img
				className="background-image-movie"
				src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
				alt=""
			/>
		</Container>
	);
};

export default MovieDesc;
