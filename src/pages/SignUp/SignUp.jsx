import React, { useRef } from "react";

import Button from "../../components/Button";
import apiFirebase from "../../firebase/apiFirebase";
import history from "../../history";
import { useUserData } from "../../Context/dataContext";

import { Container } from "./style";

export default function Login() {
	const emailRef = useRef("");
	const passRef = useRef("");
	const userNameRef = useRef("");

	const { setDataUser } = useUserData();
	async function handleLoginFace() {
		let result = await apiFirebase.fbPopup();
		if (result) {
			await setDataUser(result.user);
			await apiFirebase.addUser({
				id: result.user.uid,
				name: result.user.displayName,
				avatar: result.user.photoURL,
			});
			await history.push("/account");
		} else {
			alert("Oops..Seu login falhou");
		}
	}
	function handleSignUp(e) {
		e.preventDefault();
		let email = emailRef.current?.value;
		let pass = passRef.current?.value;
		apiFirebase.createMailPass(email, pass);
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
		</Container>
	);
}
