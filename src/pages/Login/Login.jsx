import React, { useRef } from "react";
import Button from "../../components/Button";
import apiFirebase from "../../firebase/apiFirebase";
import { Container } from "./style";

const Component = () => {
	const emailRef = useRef("");
	const passRef = useRef("");

	function handleLogin(e) {
		e.preventDefault();
		let email = emailRef.current?.value;
		let pass = passRef.current?.value;
		apiFirebase.loginMailPass(email, pass);
	}

	return (
		<Container>
			<h1>Jera Movies</h1>

			<form id="form" onSubmit={handleLogin}>
				<input type="email" placeholder="Email" name="email" ref={emailRef} />
				<input type="password" placeholder="Senha" name="password" ref={passRef} />
				<Button content="Entrar" />
			</form>
		</Container>
	);
};
export default Component;
