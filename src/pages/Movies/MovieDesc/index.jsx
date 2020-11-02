import React, { useEffect, useState } from "react";
import { MdBookmark, MdExitToApp, MdPlayArrow } from "react-icons/md";
import { useParams } from "react-router-dom";
import history from "../../../history";
import { apiTMDB, API_KEY } from "../../../Tmdb";
import apiFirebase from "../../../firebase/apiFirebase";

import { Container } from "./styles";
import { IndexAcc, InCreateAcc } from "../../../Context/dataContext";

const MovieDesc = () => {
	const { idMovie, type, id } = useParams();
	const [movie, setMovie] = useState("");

	const { indexAcc } = IndexAcc();
	const { inCreateAcc } = InCreateAcc();

	useEffect(() => {
		apiTMDB
			.get(`movie/${idMovie}?api_key=${API_KEY}&language=pt-BR`)
			.then((res) => setMovie(res.data));
	}, []);

	function handleSave(typeList) {
		let save = apiFirebase.updateList(
			id,
			type,
			idMovie,
			movie.poster_path,
			movie.original_title,
			typeList,
			indexAcc,
			inCreateAcc
		);
		alert(movie.original_title + " foi adicionado na sua lista");
		return save;
	}
	// function handleMarkWatch() {
	// 	let save = apiFirebase.updateList(
	// 		id,
	// 		type,
	// 		idMovie,
	// 		movie.poster_path,
	// 		movie.original_title,
	// 		"listWatch",
	// 		indexAcc,
	// 		inCreateAcc
	// 	);
	// 	alert(movie.original_title + " foi adicionado nos filmes assistidos");
	// 	return save;
	// }

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
					<button onClick={() => handleSave("listMark")}>
						<MdBookmark size={30} />
					</button>
					<button onClick={() => handleSave("listWatch")}>
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
