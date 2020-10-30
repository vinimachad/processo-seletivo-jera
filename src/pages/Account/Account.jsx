import React from "react";

import { Container } from "./styles";
import Button from "../../components/Button";

import apiFirebase from "../../firebase/apiFirebase";

import history from "../../history";
import { IsAuthenticated, MovieType } from "../../Context/dataContext";
import { useParams } from "react-router-dom";

export default function Users() {
	const { setTypeMovie } = MovieType();
	const { setAuthenticated } = IsAuthenticated();
	const { id } = useParams();
	function handleLogOut() {
		apiFirebase.signOut();
		setAuthenticated(false);
	}
	function handleToMovies(type) {
		history.push(`/account/${id}/movie/${type}`);
		setTypeMovie(type);
	}

	return (
		<Container>
			<div className="choose-accounts">
				<ul>
					<button onClick={() => handleToMovies("adult")} className="card-account">
						<img
							className="image-face"
							src={
								"https://ctupcursos.com.br/site/wp-content/uploads/2019/05/curso-de-informatica-para-adultos-01-1000x500.png"
							}
							alt=""
						/>
						<strong className="name">{"Adultos"}</strong>
					</button>
					<button onClick={() => handleToMovies("kid")} className="card-account">
						<img
							className="image-face"
							src="http://dreamkids.com.br/wp-content/uploads/2019/06/crian%C3%A7as-brincando2-1024x726.png"
							alt=""
						/>
						<strong className="name">Jera Kids</strong>
					</button>
				</ul>
			</div>
			<Button content="Sair" type="button" click={handleLogOut} />
		</Container>
	);
}
