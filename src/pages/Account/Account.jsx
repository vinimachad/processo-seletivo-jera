import React, { useEffect, useRef, useState } from "react";

import { Container } from "./styles";
import Button from "../../components/Button";

import apiFirebase, { db } from "../../firebase/apiFirebase";

import history from "../../history";
import { IsAuthenticated, MovieType } from "../../Context/dataContext";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import adultImage from "../../assets/adult.png";
import kidImage from "../../assets/kids.png";
import otherImage from "../../assets/icon.png";

export default function Users() {
	const { setTypeMovie } = MovieType();
	const { setAuthenticated } = IsAuthenticated();
	const { id } = useParams();

	const [openModal, setOpenModal] = useState(false);
	const [accounts, setAccounts] = useState([]);

	const nameRef = useRef(null);
	const seleRef = useRef(null);

	useEffect(() => {
		let docRef = db
			.collection("users")
			.doc(id)
			.get()
			.then((res) => {
				setAccounts(res.data().accounts);
			});
	}, []);

	function handleLogOut() {
		apiFirebase.signOut();
		setAuthenticated(false);
	}
	function handleToMovies(type) {
		history.push(`/account/${id}/movie/${type}`);
		setTypeMovie(type);
	}
	async function handleCreateProfile() {
		let name = await nameRef.current?.value;
		let type = await seleRef.current?.value;

		let docRef = await db.collection("users").doc(id);
		let getUser = await docRef.get();
		let user = await getUser.data();
		let account = await getUser.data().accounts;
		await docRef.set({
			...user,
			accounts: {
				...account,
				[name]: {
					name,
					type,
					listMark: [],
				},
			},
		});
		console.log(user);
	}
	return (
		<Container>
			{openModal ? (
				<Modal click={handleCreateProfile} nameRef={nameRef} seleRef={seleRef} />
			) : (
				""
			)}
			<div className="choose-accounts">
				<ul>
					<button onClick={() => handleToMovies("adult")} className="card-account">
						<img className="image-face" src={adultImage} alt="" />
						<strong className="name">{"Adultos"}</strong>
					</button>
					<button onClick={() => handleToMovies("kid")} className="card-account">
						<img className="image-face" src={kidImage} alt="" />
						<strong className="name">Crianças</strong>
					</button>
					{accounts !== undefined
						? accounts.map((a, index) => (
								<button onClick={() => handleToMovies(a.type)} className="card-account">
									<img className="image-face" src={otherImage} alt="" />
									<strong className="name">{a.name}</strong>
								</button>
						  ))
						: ""}
				</ul>
			</div>
			<Button
				content="Sair"
				color={"#DF1C2A"}
				type="button"
				click={handleLogOut}
			/>
			<Button
				content="Criar novo perfil"
				type="button"
				click={() => setOpenModal(true)}
			/>
		</Container>
	);
}
