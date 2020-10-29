import React, { useContext, useRef } from "react";

import Button from "../../components/Button";

// import { Context } from "../../Context/AuthContext";

import { Container } from "./style";

export default function Login() {
	// const { handleSignUp } = useContext(Context);
	// const userNameRef = useRef(null);
	// const email = useRef(null);
	// const passwordRef = useRef(null);
	return (
		<Container>
			<h1>Jera Movies</h1>
			<Formik initialValues={{}} onSubmit={handleSignUp}>
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
			</Formik>
		</Container>
	);
}
