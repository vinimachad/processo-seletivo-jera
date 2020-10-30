import React, { useEffect, useState } from "react";
import { MdBookmark, MdPlayArrow } from "react-icons/md";
import { useParams } from "react-router-dom";
import { apiTMDB, API_KEY } from "../../../Tmdb";

import { Container } from "./styles";

const MovieDesc = () => {
	const { id, idMovie, type } = useParams();
	const [movie, setMovie] = useState("");
	useEffect(() => {
		apiTMDB
			.get(`movie/${idMovie}?api_key=${API_KEY}&language=pt-BR`)
			.then((res) => setMovie(res.data));
	}, []);
	console.log(movie);
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
					<button>
						<MdBookmark />
					</button>
					<button>
						<MdPlayArrow />
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
