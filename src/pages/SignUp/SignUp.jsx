import React, { useRef } from "react";

import Button from "../../components/Button";
import { IsAuthenticated } from "../../Context/dataContext";
import apiFirebase from "../../firebase/apiFirebase";
import history from "../../history";

import firebase from "firebase/app";

import { Container } from "./style";

export default function Login() {
	const { setAuthenticated } = IsAuthenticated();

	const emailRef = useRef("");
	const passRef = useRef("");
	const userNameRef = useRef("");
	const dateRef = useRef("");

	async function handleLoginFace() {
		let result = await apiFirebase.fbPopup();
		if (result) {
			await apiFirebase.addUser({
				name: result.user.displayName,
				email: result.user.email,
				avatar: result.user.photoURL,
			});
			setAuthenticated(true);
			let user = firebase.auth().currentUser;
			history.push(`/account/${user.uid}`);
		} else {
			alert("Oops..Seu login falhou");
		}
	}
	async function handleSignUp(e) {
		e.preventDefault();
		let userN = userNameRef.current?.value;
		let email = emailRef.current?.value;
		let pass = passRef.current?.value;
		let dateNas = dateRef.current?.value;

		let createUser = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, pass)
			.then((res) => {
				apiFirebase.addUser({
					name: userN,
					email,
					dateNas,
					avatar: null,
				});
				let user = firebase.auth().currentUser;
				setAuthenticated(true);
				history.push(`/account/${user.uid}`);
			})
			.catch((err) => {
				alert(err);
			});
	}
	return (
		<Container>
			<h1>Jera Movies</h1>
			<form id="form" onSubmit={handleSignUp}>
				<input
					type="text"
					placeholder="Nome de usuario"
					name="user"
					ref={userNameRef}
				/>
				<input
					type="date"
					placeholder="Data de nascimento"
					name="user"
					ref={dateRef}
				/>
				<input type="email" placeholder="Email" name="email" ref={emailRef} />
				<input type="password" placeholder="Senha" name="password" ref={passRef} />
				<Button content="Cadastrar" />
			</form>
			<Button
				color="#0D8AF0"
				content="Entrar com o facebook"
				click={handleLoginFace}
			/>
			<a className="link" href="/login">
				Já tenho cadastro
			</a>
		</Container>
	);
}
