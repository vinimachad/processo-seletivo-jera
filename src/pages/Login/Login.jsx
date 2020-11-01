import React, { useRef } from "react";
import Button from "../../components/Button";
import { IsAuthenticated } from "../../Context/dataContext";
import apiFirebase from "../../firebase/apiFirebase";
import history from "../../history";
import { Container } from "./style";
import firebase from "firebase/app";

const Component = () => {
	const { setAuthenticated } = IsAuthenticated();

	const emailRef = useRef("");
	const passRef = useRef("");

	function handleLogin(e) {
		e.preventDefault();
		let email = emailRef.current?.value;
		let pass = passRef.current?.value;
		apiFirebase
			.loginMailPass(email, pass)
			.then((res) => {
				setAuthenticated(true);
			})
			.catch((err) => {
				alert(err);
			});
	}
	async function handleLoginFace() {
		let result = await apiFirebase.fbPopup();
		if (result) {
			setAuthenticated(true);
			let user = firebase.auth().currentUser;
			history.push(`/account/${user.uid}`);
		} else {
			alert("Oops..Seu login falhou");
		}
	}
	return (
		<Container>
			<h1>Jera Movies</h1>

			<form id="form" onSubmit={handleLogin}>
				<input type="email" placeholder="Email" name="email" ref={emailRef} />
				<input type="password" placeholder="Senha" name="password" ref={passRef} />
				<Button content="Entrar" />
			</form>
			<Button
				color="#0D8AF0"
				click={handleLoginFace}
				content="Entrar com o Facebook"
			/>
			<a className="link" href="/signup">
				Quero me cadastrar!
			</a>
		</Container>
	);
};
export default Component;
