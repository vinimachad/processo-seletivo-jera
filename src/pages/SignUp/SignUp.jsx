import React from "react";

import Button from "../../components/Button";
import apiFirebase from "../../firebase/apiFirebase";
import history from "../../history";
import { useUserData } from "../../Context/dataContext";

import { Container } from "./style";

export default function Login() {
	const { setDataUser, dataUser } = useUserData();
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

	return (
		<Container>
			<h1>Jera Movies</h1>
			<Button content="Entrar com o facebook" click={handleLoginFace} />

			{/* <Formik initialValues={{}} onSubmit={handleSignUp}>
				<Form
					id="form"
					onSubmit={() => handleSignUp(this, userNameRef, email, passwordRef)}
				>
					<Field
						type="text"
						placeholder="Nome de usuario"
						name="user"
						ref={userNameRef}
					/>
					<Field type="email" placeholder="Email" name="email" ref={email} />
					<Field
						type="password"
						placeholder="Senha"
						name="password"
						ref={passwordRef}
					/>
					<Button content="SignUp" />
				</Form>
			</Formik> */}
		</Container>
	);
}
