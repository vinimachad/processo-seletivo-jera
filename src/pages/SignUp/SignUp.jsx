import React, { useRef } from "react";

import Button from "../../components/Button";
import { IsAuthenticated } from "../../Context/dataContext";
import apiFirebase from "../../firebase/apiFirebase";
import history from "../../history";

import { Container } from "./style";

export default function Login() {
	const { setAuthenticated } = IsAuthenticated();

	const emailRef = useRef("");
	const passRef = useRef("");
	const userNameRef = useRef("");

	async function handleLoginFace() {
		let result = await apiFirebase.fbPopup();
		if (result) {
			await apiFirebase.addUser({
				name: result.user.displayName,
				email: result.user.email,
				avatar: result.user.photoURL,
			});
			await history.push("/account");
			setAuthenticated(true);
		} else {
			alert("Oops..Seu login falhou");
		}
	}
	async function handleSignUp(e) {
		e.preventDefault();
		let user = userNameRef.current?.value;
		let email = emailRef.current?.value;
		let pass = passRef.current?.value;
		await apiFirebase.createMailPass(email, pass);
		apiFirebase.addUser({
			name: user,
			avatar: null,
			email,
		});
		await history.push("/account");
		setAuthenticated(true);
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
